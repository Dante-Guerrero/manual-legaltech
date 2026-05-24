#!/bin/zsh

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")/../../.." && pwd)"
SWIFT_SCRIPT="$ROOT_DIR/+/x/scripts/pdf_to_markdown.swift"
SWIFT_CACHE="/private/tmp/swift-module-cache"

category="${1:-}"
mode="${2:---new}"

if [[ -z "$category" ]]; then
  echo "Uso: ./+/x/scripts/convert_documents.sh <papers|normas|libros-manuales|jurisprudencia> [--new|--all]" >&2
  exit 1
fi

case "$category" in
  papers|normas|libros-manuales|jurisprudencia) ;;
  *)
    echo "Categoria no valida: $category" >&2
    echo "Categorias validas: papers, normas, libros-manuales, jurisprudencia" >&2
    exit 1
    ;;
esac

DOCS_DIR="$ROOT_DIR/+/y/$category"
PDF_DIR="$DOCS_DIR/pdf"
MARKDOWN_DIR="$DOCS_DIR/markdown"
LIST_FILE="$ROOT_DIR/+/x/instrucciones/convertidos-$category.md"

mkdir -p "$PDF_DIR" "$MARKDOWN_DIR" "$SWIFT_CACHE"

extract_listed_files() {
  if [[ -f "$LIST_FILE" ]]; then
    sed -n 's/^- `\(.*\)`$/\1/p' "$LIST_FILE"
  fi
}

write_list_file() {
  local files count
  files=("${(@f)$(find "$PDF_DIR" -maxdepth 1 -type f -name '*.pdf' -exec basename {} \; | sort)}")
  count="${#files[@]}"
  {
    echo "# Documentos convertidos: $category"
    echo
    echo "Lista de PDF en \`+/y/$category/pdf\` que ya tienen su equivalente en Markdown dentro de \`+/y/$category/markdown\`."
    echo
    echo "Total: $count"
    echo
    for file in "${files[@]}"; do
      echo "- \`$file\`"
    done
  } > "$LIST_FILE"
}

convert_file() {
  local pdf_path="$1"
  local pdf_name md_name md_path

  pdf_name="$(basename "$pdf_path")"
  md_name="${pdf_name%.pdf}.md"
  md_path="$MARKDOWN_DIR/$md_name"

  CLANG_MODULE_CACHE_PATH="$SWIFT_CACHE" swift "$SWIFT_SCRIPT" "$pdf_path" "$md_path"
}

if [[ "$mode" == "--all" ]]; then
  find "$MARKDOWN_DIR" -mindepth 1 -maxdepth 1 -type f -delete
  while IFS= read -r pdf_path; do
    convert_file "$pdf_path"
  done < <(find "$PDF_DIR" -maxdepth 1 -type f -name '*.pdf' | sort)
  write_list_file
  exit 0
fi

if [[ "$mode" != "--new" ]]; then
  echo "Uso: ./+/x/scripts/convert_documents.sh <papers|normas|libros-manuales|jurisprudencia> [--new|--all]" >&2
  exit 1
fi

listed_files=("${(@f)$(extract_listed_files)}")
typeset -A listed_map
for file in "${listed_files[@]}"; do
  listed_map["$file"]=1
done

converted_any=0
while IFS= read -r pdf_path; do
  pdf_name="$(basename "$pdf_path")"
  if [[ -n "${listed_map[$pdf_name]:-}" ]]; then
    continue
  fi
  convert_file "$pdf_path"
  converted_any=1
done < <(find "$PDF_DIR" -maxdepth 1 -type f -name '*.pdf' | sort)

if [[ "$converted_any" -eq 1 || ! -f "$LIST_FILE" ]]; then
  write_list_file
fi
