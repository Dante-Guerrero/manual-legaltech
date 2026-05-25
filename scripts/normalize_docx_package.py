#!/usr/bin/env python3

from __future__ import annotations

import sys
import tempfile
import zipfile
from pathlib import Path
from xml.etree import ElementTree as ET


CONTENT_TYPES_NS = "http://schemas.openxmlformats.org/package/2006/content-types"
REL_NS = "http://schemas.openxmlformats.org/package/2006/relationships"
W_NS = "http://schemas.openxmlformats.org/wordprocessingml/2006/main"


def local_name(tag: str) -> str:
    if "}" in tag:
        return tag.rsplit("}", 1)[1]
    return tag


def normalize_relationships(data: bytes) -> bytes:
    root = ET.fromstring(data)
    clean_root = ET.Element("Relationships", xmlns=REL_NS)

    for child in root:
        clean_child = ET.SubElement(clean_root, "Relationship")
        for key, value in child.attrib.items():
            clean_child.set(local_name(key), value)

    return ET.tostring(clean_root, encoding="utf-8", xml_declaration=True)


def normalize_websettings(data: bytes) -> bytes:
    root = ET.fromstring(data)
    clean_root = ET.Element("webSettings", xmlns=W_NS)

    for child in root:
        clean_child = ET.SubElement(clean_root, local_name(child.tag))
        for key, value in child.attrib.items():
            clean_child.set(local_name(key), value)

    return ET.tostring(clean_root, encoding="utf-8", xml_declaration=True)


def normalize_content_types(data: bytes) -> bytes:
    ET.register_namespace("", CONTENT_TYPES_NS)
    root = ET.fromstring(data)

    has_png_default = False
    has_png_override = False
    for child in root:
        tag = local_name(child.tag)
        if tag == "Default" and child.attrib.get("Extension") == "png":
            has_png_default = True
        if tag == "Override" and child.attrib.get("PartName", "").endswith(".png"):
            has_png_override = True

    if has_png_override and not has_png_default:
        default = ET.Element(f"{{{CONTENT_TYPES_NS}}}Default")
        default.set("Extension", "png")
        default.set("ContentType", "image/png")

        insert_at = 0
        for i, child in enumerate(list(root)):
            if local_name(child.tag) == "Default":
                insert_at = i + 1
        root.insert(insert_at, default)

    return ET.tostring(root, encoding="utf-8", xml_declaration=True)


def rewrite_docx(path: Path) -> None:
    normalizers = {
        "word/_rels/document.xml.rels": normalize_relationships,
        "word/webSettings.xml": normalize_websettings,
        "[Content_Types].xml": normalize_content_types,
    }

    with zipfile.ZipFile(path) as src, tempfile.NamedTemporaryFile(
        suffix=".docx", delete=False
    ) as tmp:
        tmp_path = Path(tmp.name)

        with zipfile.ZipFile(tmp_path, "w") as dst:
            for info in src.infolist():
                data = src.read(info.filename)
                normalizer = normalizers.get(info.filename)
                if normalizer is not None:
                    data = normalizer(data)

                clone = zipfile.ZipInfo(info.filename)
                clone.date_time = info.date_time
                clone.compress_type = info.compress_type
                clone.comment = info.comment
                clone.create_system = info.create_system
                clone.create_version = info.create_version
                clone.extract_version = info.extract_version
                clone.flag_bits = info.flag_bits
                clone.internal_attr = info.internal_attr
                clone.external_attr = info.external_attr
                clone.volume = info.volume
                dst.writestr(clone, data)

    tmp_path.replace(path)


def main() -> int:
    if len(sys.argv) != 2:
        print("Usage: normalize_docx_package.py path/to/file.docx", file=sys.stderr)
        return 1

    rewrite_docx(Path(sys.argv[1]))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
