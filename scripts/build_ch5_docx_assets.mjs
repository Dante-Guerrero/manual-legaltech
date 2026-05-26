import fs from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";

const repoRoot = process.cwd();
const sourceChapterPath = path.join(repoRoot, "parte-2-modulo-2", "05-capitulo.qmd");
const outputChapterPath = path.join(repoRoot, "parte-2-modulo-2", "05-capitulo-docx.qmd");
const manifestPath = path.join(repoRoot, "scripts", "ch5-docx-previews.json");
const outputDir = path.join(repoRoot, "parte-2-modulo-2", "img", "05-capitulo-docx");
const mermaidScriptPath = "/Applications/quarto/share/formats/html/mermaid/mermaid.min.js";

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

async function ensureDir(targetPath) {
  await fs.mkdir(targetPath, { recursive: true });
}

async function loadManifest() {
  const raw = await fs.readFile(manifestPath, "utf8");
  const manifest = JSON.parse(raw);

  if (!Array.isArray(manifest) || manifest.length === 0) {
    throw new Error("El manifiesto scripts/ch5-docx-previews.json está vacío o no es válido.");
  }

  const seen = new Set();
  for (const entry of manifest) {
    if (!entry.id || entry.mermaid_index === undefined || !entry.output) {
      throw new Error("Cada entrada del manifiesto debe incluir id, mermaid_index y output.");
    }
    if (seen.has(entry.id)) {
      throw new Error(`El id '${entry.id}' está duplicado en el manifiesto.`);
    }
    seen.add(entry.id);
  }

  return manifest;
}

function extractMermaidBlocks(source) {
  const blocks = [];
  const pattern = /```(?:\{mermaid\}|mermaid)\s*([\s\S]*?)```/g;
  let match;

  while ((match = pattern.exec(source)) !== null) {
    blocks.push(match[1].trim());
  }

  return blocks;
}

function buildPreviewHtml(diagramSource) {
  const escapedDiagram = diagramSource
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");

  return `<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8">
    <style>
      :root {
        color-scheme: light;
      }

      * {
        box-sizing: border-box;
      }

      body {
        margin: 0;
        min-height: 100vh;
        padding: 36px;
        background: #edf3fb;
        font-family: "Aptos", "Segoe UI", sans-serif;
      }

      .docx-browser-frame {
        width: 1200px;
        margin: 0 auto;
        border: 1px solid #c7d4e5;
        border-radius: 24px;
        overflow: hidden;
        background: #ffffff;
        box-shadow: 0 20px 48px rgba(36, 52, 71, 0.12);
      }

      .docx-browser-bar {
        display: flex;
        align-items: center;
        gap: 14px;
        padding: 18px 20px;
        border-bottom: 1px solid #d6e0eb;
        background: linear-gradient(180deg, #f6f9fc 0%, #edf3fa 100%);
      }

      .docx-browser-dots {
        color: #93a4bb;
        font-size: 18px;
        letter-spacing: 4px;
        line-height: 1;
      }

      .docx-browser-url {
        flex: 1;
        min-height: 40px;
        display: flex;
        align-items: center;
        padding: 0 16px;
        border: 1px solid #d1dceb;
        border-radius: 999px;
        background: #ffffff;
        color: #5b6f86;
        font-size: 16px;
      }

      .docx-browser-body {
        padding: 36px;
        background: #ffffff;
      }

      .diagram-card {
        border: 1px solid #dce5f0;
        border-radius: 18px;
        padding: 28px;
        background: linear-gradient(180deg, #ffffff 0%, #f9fbfe 100%);
      }

      .diagram-card svg {
        display: block;
        width: 100%;
        height: auto;
        margin: 0 auto;
      }
    </style>
  </head>
  <body>
    <div class="docx-browser-frame">
      <div class="docx-browser-bar">
        <div class="docx-browser-dots" aria-hidden="true">● ● ●</div>
        <div class="docx-browser-url">modelo-de-proceso.mmd</div>
      </div>
      <div class="docx-browser-body">
        <div class="diagram-card">
          <pre class="mermaid">${escapedDiagram}</pre>
        </div>
      </div>
    </div>
  </body>
</html>`;
}

async function capturePreviews(manifest, blocks) {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({
    viewport: { width: 1400, height: 1100 },
    deviceScaleFactor: 2
  });

  try {
    for (const entry of manifest) {
      const diagramSource = blocks[entry.mermaid_index];
      if (!diagramSource) {
        throw new Error(`No se encontró el bloque Mermaid con índice ${entry.mermaid_index} para '${entry.id}'.`);
      }

      await page.setContent(buildPreviewHtml(diagramSource), { waitUntil: "load" });
      await page.addScriptTag({ path: mermaidScriptPath });
      await page.evaluate(async () => {
        mermaid.initialize({
          startOnLoad: false,
          securityLevel: "loose",
          theme: "neutral",
          flowchart: {
            useMaxWidth: true,
            htmlLabels: true
          }
        });
        await mermaid.run({
          nodes: [document.querySelector(".mermaid")]
        });
      });

      const frame = page.locator(".docx-browser-frame");
      await frame.waitFor({ state: "visible", timeout: 15000 });
      const targetPath = path.join(repoRoot, entry.output);
      await ensureDir(path.dirname(targetPath));
      await frame.screenshot({ path: targetPath, animations: "disabled" });
    }
  } finally {
    await browser.close();
  }
}

function buildFigureMarkdown(entry) {
  return `![${entry.caption}](img/05-capitulo-docx/${path.basename(entry.output)}){fig-alt="${entry.alt}" width=${entry.width ?? "90%"}}`;
}

async function buildDocxChapter(manifest) {
  let source = await fs.readFile(sourceChapterPath, "utf8");

  for (const entry of manifest) {
    source = source.replace(/```mermaid\s*[\s\S]*?```/, buildFigureMarkdown(entry));
  }

  await fs.writeFile(outputChapterPath, source);
}

async function main() {
  const manifest = await loadManifest();
  const source = await fs.readFile(sourceChapterPath, "utf8");
  const blocks = extractMermaidBlocks(source);
  await ensureDir(outputDir);
  await capturePreviews(manifest, blocks);
  await buildDocxChapter(manifest);
  console.log("Capítulo 5 para docx regenerado con capturas de Mermaid.");
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
