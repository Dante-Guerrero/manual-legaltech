#!/bin/zsh

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")/../../.." && pwd)"
PAPERS_DIR="$ROOT_DIR/+/y/papers"
MARKDOWN_DIR="$ROOT_DIR/+/y/papers_md"
LIST_FILE="$ROOT_DIR/+/x/instrucciones/papers-convertidos.md"
SWIFT_SCRIPT="$ROOT_DIR/+/x/scripts/pdf_to_markdown.swift"
SWIFT_CACHE="/private/tmp/swift-module-cache"

mode="${1:---new}"

mkdir -p "$MARKDOWN_DIR" "$SWIFT_CACHE"

extract_listed_files() {
  if [[ -f "$LIST_FILE" ]]; then
    sed -n 's/^- `\(.*\)`$/\1/p' "$LIST_FILE"
  fi
}

write_list_file() {
  local files
  files=("${(@f)$(find "$PAPERS_DIR" -maxdepth 1 -type f -name '*.pdf' -exec basename {} \; | sort)}")
  {
    echo "# Papers convertidos"
    echo
    echo "Lista de PDF en \`+/y/papers\` que ya tienen su equivalente en Markdown dentro de \`+/y/papers_md\`."
    echo
    echo "Total: ${#files[@]}"
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
  done < <(find "$PAPERS_DIR" -maxdepth 1 -type f -name '*.pdf' | sort)
  write_list_file
  exit 0
fi

if [[ "$mode" != "--new" ]]; then
  echo "Uso: ./+/x/scripts/convert_papers.sh [--new|--all]" >&2
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
done < <(find "$PAPERS_DIR" -maxdepth 1 -type f -name '*.pdf' | sort)

if [[ "$converted_any" -eq 1 || ! -f "$LIST_FILE" ]]; then
  write_list_file
fi
