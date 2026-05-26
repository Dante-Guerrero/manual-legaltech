import fs from "node:fs/promises";
import path from "node:path";
import http from "node:http";
import { spawn } from "node:child_process";
import { pathToFileURL } from "node:url";
import { chromium } from "playwright";

const repoRoot = process.cwd();
const manifestPath = path.join(repoRoot, "scripts", "ch7-docx-previews.json");
const sourceChapterPath = path.join(repoRoot, "parte-3-modulo-3", "07-capitulo.qmd");
const outputChapterPath = path.join(repoRoot, "parte-3-modulo-3", "07-capitulo-docx.qmd");
const serverPort = 4173;
const serverHost = "127.0.0.1";
const defaultViewport = { width: 1280, height: 960 };
const defaultFrameSelector = "#docx-browser-frame";

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function escapeAttribute(value) {
  return value.replaceAll('"', "&quot;");
}

async function fileExists(targetPath) {
  try {
    await fs.access(targetPath);
    return true;
  } catch {
    return false;
  }
}

async function ensureDir(targetPath) {
  await fs.mkdir(targetPath, { recursive: true });
}

async function loadManifest() {
  const raw = await fs.readFile(manifestPath, "utf8");
  const manifest = JSON.parse(raw);

  if (!Array.isArray(manifest) || manifest.length === 0) {
    throw new Error("El manifiesto scripts/ch7-docx-previews.json está vacío o no es una lista.");
  }

  const ids = new Set();
  for (const entry of manifest) {
    if (!entry.id || !entry.source || !entry.output) {
      throw new Error("Cada entrada del manifiesto debe tener id, source y output.");
    }
    if (ids.has(entry.id)) {
      throw new Error(`El id '${entry.id}' está duplicado en el manifiesto.`);
    }
    ids.add(entry.id);
  }

  return manifest;
}

async function waitForServer(url, serverProcess) {
  const maxAttempts = 40;

  for (let attempt = 0; attempt < maxAttempts; attempt += 1) {
    if (serverProcess.exitCode !== null) {
      throw new Error(`El servidor local terminó antes de quedar disponible (código ${serverProcess.exitCode}).`);
    }

    try {
      await new Promise((resolve, reject) => {
        const request = http.get(url, (response) => {
          response.resume();
          resolve();
        });

        request.on("error", reject);
      });
      return;
    } catch {
      await new Promise((resolve) => setTimeout(resolve, 250));
    }
  }

  throw new Error("No se pudo levantar el servidor HTTP local para las capturas.");
}

async function startServer() {
  const serverProcess = spawn(
    "python3",
    ["-m", "http.server", String(serverPort), "--bind", serverHost],
    {
      cwd: repoRoot,
      stdio: ["ignore", "pipe", "pipe"]
    }
  );

  let stderr = "";
  serverProcess.stderr.on("data", (chunk) => {
    stderr += chunk.toString();
  });

  const baseUrl = `http://${serverHost}:${serverPort}/`;
  try {
    await waitForServer(baseUrl, serverProcess);
  } catch (error) {
    serverProcess.kill("SIGTERM");
    const suffix = stderr ? `\nSalida del servidor:\n${stderr}` : "";
    throw new Error(`${error.message}${suffix}`);
  }

  return { serverProcess, baseUrl };
}

async function stopServer(serverProcess) {
  if (!serverProcess || serverProcess.exitCode !== null) {
    return;
  }

  await new Promise((resolve) => {
    serverProcess.once("exit", resolve);
    serverProcess.kill("SIGTERM");
  });
}

async function runActions(page, entry) {
  for (const action of entry.actions ?? []) {
    if (!action.type) {
      throw new Error(`La entrada '${entry.id}' tiene una acción sin type.`);
    }

    if (action.type === "click") {
      await page.locator(action.selector).click();
    } else if (action.type === "fill") {
      await page.locator(action.selector).fill(action.value ?? "");
    } else if (action.type === "wait") {
      await page.waitForTimeout(action.ms ?? 250);
    } else if (action.type === "waitForSelector") {
      await page.locator(action.selector).waitFor();
    } else {
      throw new Error(`La acción '${action.type}' de '${entry.id}' no está soportada.`);
    }

    await page.waitForTimeout(action.waitAfterMs ?? 200);
  }
}

async function decoratePageForDocxScreenshot(page, entry) {
  const urlLabel = entry.url_label ?? path.basename(entry.source);

  await page.evaluate(({ urlLabel, frameSelector }) => {
    if (document.querySelector(frameSelector)) {
      return;
    }

    const body = document.body;
    const computedBody = window.getComputedStyle(body);
    const originalChildren = Array.from(body.childNodes);

    const frame = document.createElement("div");
    frame.id = frameSelector.slice(1);

    const bar = document.createElement("div");
    bar.className = "docx-browser-bar";

    const dots = document.createElement("div");
    dots.className = "docx-browser-dots";
    dots.setAttribute("aria-hidden", "true");
    dots.textContent = "● ● ●";

    const url = document.createElement("div");
    url.className = "docx-browser-url";
    url.textContent = urlLabel;

    const viewport = document.createElement("div");
    viewport.className = "docx-browser-viewport";

    const content = document.createElement("div");
    content.className = "docx-browser-content";

    const contentComputedStyles = [
      "background",
      "backgroundColor",
      "backgroundImage",
      "backgroundRepeat",
      "backgroundSize",
      "backgroundPosition",
      "color",
      "fontFamily",
      "fontSize",
      "fontWeight",
      "lineHeight",
      "letterSpacing",
      "paddingTop",
      "paddingRight",
      "paddingBottom",
      "paddingLeft"
    ];

    for (const property of contentComputedStyles) {
      content.style[property] = computedBody[property];
    }

    if (!content.style.backgroundColor || content.style.backgroundColor === "rgba(0, 0, 0, 0)") {
      content.style.backgroundColor = "#ffffff";
    }

    if (
      !content.style.paddingTop &&
      !content.style.paddingRight &&
      !content.style.paddingBottom &&
      !content.style.paddingLeft
    ) {
      content.style.padding = "32px";
    }

    bar.append(dots, url);
    viewport.appendChild(content);
    frame.append(bar, viewport);

    body.innerHTML = "";
    body.appendChild(frame);
    content.append(...originalChildren);

    document.documentElement.style.background = "#edf3fb";
    document.documentElement.style.margin = "0";
    body.style.margin = "0";
    body.style.padding = "28px";
    body.style.background = "#edf3fb";
    body.style.minHeight = "100vh";

    const style = document.createElement("style");
    style.textContent = `
      ${frameSelector} {
        width: min(1040px, calc(100vw - 56px));
        margin: 0 auto;
        border: 1px solid #c7d4e5;
        border-radius: 22px;
        overflow: hidden;
        background: #ffffff;
        box-shadow: 0 20px 48px rgba(36, 52, 71, 0.12);
      }

      ${frameSelector} .docx-browser-bar {
        display: flex;
        align-items: center;
        gap: 14px;
        padding: 16px 18px;
        border-bottom: 1px solid #d6e0eb;
        background: linear-gradient(180deg, #f6f9fc 0%, #edf3fa 100%);
      }

      ${frameSelector} .docx-browser-dots {
        color: #93a4bb;
        font-size: 18px;
        letter-spacing: 4px;
        line-height: 1;
        white-space: nowrap;
      }

      ${frameSelector} .docx-browser-url {
        flex: 1;
        min-width: 0;
        padding: 10px 16px;
        border: 1px solid #d2ddea;
        border-radius: 999px;
        background: #ffffff;
        color: #5e6d80;
        font: 500 16px/1.2 -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      }

      ${frameSelector} .docx-browser-viewport {
        padding: 28px;
        min-height: 520px;
        background:
          radial-gradient(circle at top left, rgba(219, 234, 254, 0.6), transparent 28%),
          linear-gradient(180deg, #f8fbff 0%, #f3f7fc 100%);
      }

      ${frameSelector} .docx-browser-content {
        min-height: 460px;
        border: 1px solid #d8e3ef;
        border-radius: 18px;
        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.75);
        overflow: hidden;
      }
    `;
    document.head.appendChild(style);
  }, { urlLabel, frameSelector: defaultFrameSelector });
}

async function capturePreview(browser, baseUrl, entry) {
  const sourcePath = path.join(repoRoot, entry.source);
  if (!(await fileExists(sourcePath))) {
    throw new Error(`No existe el archivo fuente para '${entry.id}': ${entry.source}`);
  }

  const outputPath = path.join(repoRoot, entry.output);
  await ensureDir(path.dirname(outputPath));

  const context = await browser.newContext({
    viewport: entry.viewport ?? defaultViewport,
    deviceScaleFactor: 1.5
  });
  const page = await context.newPage();

  try {
    const sourceUrl = baseUrl
      ? new URL(encodeURI(entry.source.replaceAll(path.sep, "/")), baseUrl).toString()
      : pathToFileURL(sourcePath).toString();
    await page.goto(sourceUrl, { waitUntil: "load" });
    await page.waitForTimeout(entry.initialWaitMs ?? 250);
    await decoratePageForDocxScreenshot(page, entry);
    await runActions(page, entry);

    const selector = !entry.screenshot_selector || entry.screenshot_selector === "body"
      ? defaultFrameSelector
      : entry.screenshot_selector;
    const locator = page.locator(selector);
    const count = await locator.count();
    if (count === 0) {
      throw new Error(`No se encontró el selector '${selector}' para '${entry.id}'.`);
    }

    await locator.first().screenshot({
      path: outputPath,
      animations: "disabled"
    });
  } finally {
    await context.close();
  }
}

function resolveFigureWidth(entry) {
  if (!entry.width || entry.width === "85%") {
    return "95%";
  }

  return entry.width;
}

function buildReplacement(entry) {
  const relativeImagePath = path.relative(path.dirname(outputChapterPath), path.join(repoRoot, entry.output)).replaceAll(path.sep, "/");
  const lines = [];

  if (entry.label) {
    lines.push(`**${entry.label}**`, "");
  }

  lines.push(
    `![${entry.caption}](${relativeImagePath}){fig-alt="${escapeAttribute(entry.alt ?? entry.caption)}" width=${resolveFigureWidth(entry)}}`
  );

  return lines.join("\n");
}

async function generateDocxChapter(manifest) {
  const source = await fs.readFile(sourceChapterPath, "utf8");
  let output = source;

  for (const entry of manifest) {
    const markerPattern = new RegExp(
      `<!-- preview: ${escapeRegExp(entry.id)} -->[\\s\\S]*?<!-- /preview -->`,
      "g"
    );

    if (!markerPattern.test(output)) {
      throw new Error(`No se encontró el marcador <!-- preview: ${entry.id} --> en 07-capitulo.qmd.`);
    }

    output = output.replace(
      markerPattern,
      `<!-- preview: ${entry.id} -->\n${buildReplacement(entry)}\n<!-- /preview -->`
    );
  }

  if (output.includes("browser-preview")) {
    throw new Error("La versión docx generada todavía contiene bloques browser-preview. Revisa los marcadores.");
  }

  await fs.writeFile(outputChapterPath, output, "utf8");
}

async function main() {
  const manifest = await loadManifest();
  let serverProcess = null;
  let baseUrl = null;

  try {
    try {
      const server = await startServer();
      serverProcess = server.serverProcess;
      baseUrl = server.baseUrl;
      process.stdout.write("Servidor HTTP local levantado para las capturas.\n");
    } catch (error) {
      process.stdout.write(`No se pudo levantar el servidor local; se usará file:// (${error.message}).\n`);
    }

    const browser = await chromium.launch();
    try {
      for (const entry of manifest) {
        process.stdout.write(`Capturando ${entry.id}...\n`);
        await capturePreview(browser, baseUrl, entry);
      }
    } finally {
      await browser.close();
    }

    await generateDocxChapter(manifest);
    process.stdout.write(`Generado ${path.relative(repoRoot, outputChapterPath)}\n`);
  } finally {
    await stopServer(serverProcess);
  }
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
