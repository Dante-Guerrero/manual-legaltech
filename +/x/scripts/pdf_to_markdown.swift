import Foundation
import PDFKit

enum PDFToolError: Error {
    case invalidArguments
    case unreadablePDF(String)
    case writeFailed(String)
}

func usage() {
    let text = """
    Usage:
      swift ./+/x/scripts/pdf_to_markdown.swift <input.pdf> <output.md>
      swift ./+/x/scripts/pdf_to_markdown.swift --preview <input.pdf> [pages]
    """
    FileHandle.standardError.write(text.data(using: .utf8)!)
}

func normalize(_ text: String) -> String {
    let lines = text
        .replacingOccurrences(of: "\r\n", with: "\n")
        .replacingOccurrences(of: "\r", with: "\n")
        .components(separatedBy: "\n")
        .map { $0.trimmingCharacters(in: .whitespaces) }

    var result: [String] = []
    var paragraph: [String] = []

    func flushParagraph() {
        guard !paragraph.isEmpty else { return }
        result.append(paragraph.joined(separator: " "))
        paragraph.removeAll()
    }

    for line in lines {
        if line.isEmpty {
            flushParagraph()
            if result.last != "" {
                result.append("")
            }
        } else {
            paragraph.append(line)
        }
    }

    flushParagraph()

    while result.last == "" {
        result.removeLast()
    }

    return result.joined(separator: "\n\n") + "\n"
}

func readPDF(_ path: String) throws -> PDFDocument {
    let url = URL(fileURLWithPath: path)
    guard let pdf = PDFDocument(url: url) else {
        throw PDFToolError.unreadablePDF(path)
    }
    return pdf
}

func preview(_ inputPath: String, pageCount: Int) throws {
    let pdf = try readPDF(inputPath)
    let pages = min(max(pageCount, 1), pdf.pageCount)
    var output = ""

    for index in 0..<pages {
        guard let page = pdf.page(at: index) else { continue }
        let text = normalize(page.string ?? "")
        output += "## Page \(index + 1)\n\n"
        output += text
        if index + 1 < pages {
            output += "\n"
        }
    }

    FileHandle.standardOutput.write(output.data(using: .utf8)!)
}

func convert(_ inputPath: String, _ outputPath: String) throws {
    let pdf = try readPDF(inputPath)
    let baseName = URL(fileURLWithPath: inputPath).deletingPathExtension().lastPathComponent

    var body = "# \(baseName)\n\n"
    body += "Fuente PDF: `../pdf/\(baseName).pdf`\n\n"
    var extractedAnyText = false
    for index in 0..<pdf.pageCount {
        guard let page = pdf.page(at: index) else { continue }
        let text = normalize(page.string ?? "")
        if text.trimmingCharacters(in: .whitespacesAndNewlines).isEmpty { continue }
        extractedAnyText = true
        body += "## Page \(index + 1)\n\n"
        body += text
        body += "\n"
    }

    if !extractedAnyText {
        body += "> Nota: no se pudo extraer texto de este PDF con el conversor actual. Es posible que el documento sea una imagen escaneada o requiera OCR.\n"
    }

    do {
        try body.write(to: URL(fileURLWithPath: outputPath), atomically: true, encoding: .utf8)
    } catch {
        throw PDFToolError.writeFailed(outputPath)
    }
}

do {
    let args = CommandLine.arguments.dropFirst()
    if args.isEmpty {
        usage()
        throw PDFToolError.invalidArguments
    }

    if args.first == "--preview" {
        guard args.count >= 2 else {
            usage()
            throw PDFToolError.invalidArguments
        }
        let input = String(args[args.startIndex + 1])
        let pages = args.count >= 3 ? Int(args[args.startIndex + 2]) ?? 1 : 1
        try preview(input, pageCount: pages)
    } else {
        guard args.count == 2 else {
            usage()
            throw PDFToolError.invalidArguments
        }
        try convert(String(args[args.startIndex]), String(args[args.startIndex + 1]))
    }
} catch {
    FileHandle.standardError.write("Error: \(error)\n".data(using: .utf8)!)
    exit(1)
}
