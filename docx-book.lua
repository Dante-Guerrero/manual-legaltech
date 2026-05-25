local function text_of(el)
  return pandoc.utils.stringify(el)
end

local function is_module_heading(text)
  return text:match("^I%. ")
    or text:match("^II%. ")
    or text:match("^III%. ")
    or text:match("^IV%. ")
end

local function is_preserved_heading(text)
  local fixed = {
    ["Profesores"] = true,
    ["Bienvenida"] = true,
    ["Introducción"] = true,
    ["Tutoriales"] = true,
    ["Referencias"] = true,
    ["Índice"] = true
  }
  return fixed[text] or is_module_heading(text)
end

local function pagebreak_block()
  return pandoc.RawBlock(
    "openxml",
    '<w:p xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:r><w:br w:type="page"/></w:r></w:p>'
  )
end

local function spacer_block()
  return pandoc.RawBlock(
    "openxml",
    '<w:p xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:pPr><w:spacing w:after="120"/></w:pPr></w:p>'
  )
end

function Header(el)
  local text = text_of(el)
  local original_level = el.level

  if el.level == 1 and not is_preserved_heading(text) then
    el.level = 2
  end

  local is_chapter_like = original_level == 1 and not is_preserved_heading(text)
  local is_major_section = original_level == 1 and is_preserved_heading(text)

  if is_chapter_like or is_major_section then
    return { pagebreak_block(), el }
  end

  return el
end

function Div(el)
  for _, class in ipairs(el.classes) do
    if class:match("^callout") then
      return { spacer_block(), el }
    end
  end
  return el
end
