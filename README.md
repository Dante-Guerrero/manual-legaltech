# Manual Legal Tech

Libro web desarrollado con Quarto para el curso **Legal Tech** de la Facultad de Derecho y Economía de la **Universidad Científica del Sur**.

El repositorio combina dos capas de trabajo:

- el **libro** propiamente dicho, escrito en archivos `.qmd`;
- un **subsistema auxiliar** en la carpeta [+](/Users/dante/github/manual-legaltech/+) para papers, notas atómicas, instrucciones y scripts de apoyo.

## Propósito

Construir un manual universitario práctico para estudiantes de Derecho, orientado a pensamiento computacional, automatización, datos, web, nube, ciberseguridad e inteligencia artificial aplicada al entorno jurídico.

## Estructura principal

- [_quarto.yml](/Users/dante/github/manual-legaltech/_quarto.yml): configuración general del libro y orden de capítulos.
- [_quarto-docx.yml](/Users/dante/github/manual-legaltech/_quarto-docx.yml): configuración específica para la exportación a Word.
- [index.qmd](/Users/dante/github/manual-legaltech/index.qmd): portada del manual.
- [parte-0](/Users/dante/github/manual-legaltech/parte-0): páginas iniciales.
- [parte-1-modulo-1](/Users/dante/github/manual-legaltech/parte-1-modulo-1) a [parte-4-modulo-4](/Users/dante/github/manual-legaltech/parte-4-modulo-4): módulos del curso.
- [referencias.qmd](/Users/dante/github/manual-legaltech/referencias.qmd): bibliografía final.
- [styles.css](/Users/dante/github/manual-legaltech/styles.css): estilos personalizados.
- [images](/Users/dante/github/manual-legaltech/images): imágenes del libro.
- [docs](/Users/dante/github/manual-legaltech/docs): salida renderizada del sitio.
- [exports/docx](/Users/dante/github/manual-legaltech/exports/docx): salida renderizada del libro en Word.
- [scripts](/Users/dante/github/manual-legaltech/scripts): automatizaciones de soporte para generar assets derivados.

## Carpeta `+`

La carpeta [+](/Users/dante/github/manual-legaltech/+) concentra el sistema auxiliar del proyecto:

- [+/x](/Users/dante/github/manual-legaltech/+/x): editorial, instrucciones operativas y scripts.
- [+/y](/Users/dante/github/manual-legaltech/+/y): repositorio documental clasificado por tipo, con PDF, conversiones a Markdown y extractos de fuentes web.
- [+/z](/Users/dante/github/manual-legaltech/+/z): notas atómicas en lógica zettelkasten.

Punto de entrada recomendado:
[+/README.md](/Users/dante/github/manual-legaltech/+/README.md)

## Requisitos

- [Quarto](https://quarto.org/) instalado localmente.
- `npm` disponible localmente.

Si vas a renderizar la versión Word, instala también las dependencias del generador de capturas:

```bash
npm install
```

## Uso

Renderizar la versión web del libro:

```bash
quarto render
```

También puedes usar explícitamente el perfil por defecto del proyecto:

```bash
quarto render --to html
```

La salida web queda en [docs](/Users/dante/github/manual-legaltech/docs).

Antes de renderizar la versión Word, conviene regenerar los capítulos que usan assets especiales:

```bash
npm run build:docx-assets
```

Ese paso actualiza:

- [parte-2-modulo-2/05-capitulo-docx.qmd](/Users/dante/github/manual-legaltech/parte-2-modulo-2/05-capitulo-docx.qmd) y sus imágenes;
- [parte-3-modulo-3/07-capitulo-docx.qmd](/Users/dante/github/manual-legaltech/parte-3-modulo-3/07-capitulo-docx.qmd) y sus capturas de navegador.

Luego sí, renderiza la versión Word:

```bash
quarto render --profile docx --to docx
```

La salida `.docx` queda en [exports/docx/legal-tech-manual-del-curso.docx](/Users/dante/github/manual-legaltech/exports/docx/legal-tech-manual-del-curso.docx).

Vista previa local de la web:

```bash
quarto preview
```

Nota sobre Word: Quarto sí puede exportar el libro completo a `.docx`, pero en esa salida los `parts` del libro no se preservan como en la navegación HTML; Word recibe el contenido corrido del libro con sus capítulos.

Convertir nuevos documentos agregados a una categoría de `+/y`:

```bash
./+/x/scripts/convert_documents.sh papers --new
```

La misma lógica funciona para `normas`, `libros-manuales` y `jurisprudencia`.

## Flujo recomendado

Para mantener consistencia entre web y Word, el orden más seguro es este:

1. editar capítulos, scripts o materiales auxiliares;
2. ejecutar `npm run build:docx-assets` si hubo cambios en capítulos con previews especiales para Word;
3. renderizar web con `quarto render`;
4. renderizar Word con `quarto render --profile docx --to docx`;
5. revisar [docs](/Users/dante/github/manual-legaltech/docs) y el `.docx` final antes de publicar.

## Criterio editorial

El libro debe mantenerse como un manual autocontenido, claro y pedagógico. Las instrucciones internas, notas metodológicas, propuestas de citas y materiales de apoyo no deben vivir dentro de los capítulos, sino en la carpeta `+`.

El plan editorial vigente está en [+/x/editorial/PLAN.md](/Users/dante/github/manual-legaltech/+/x/editorial/PLAN.md).

## Estado actual

El repositorio ya tiene una estructura funcional de libro web, una exportación Word con capítulos derivados cuando hace falta y una infraestructura auxiliar más ordenada para investigación, citas, estilo y continuidad editorial. La línea natural de trabajo es seguir fortaleciendo capítulos, bibliografía y notas de apoyo sin mezclar esas capas entre sí.
