# Manual Legal Tech

Libro web desarrollado con Quarto para el curso **Legal Tech** de la Facultad de Derecho y Economía de la **Universidad Científica del Sur**.

El repositorio combina dos capas de trabajo:

- el **libro** propiamente dicho, escrito en archivos `.qmd`;
- un **subsistema auxiliar** en la carpeta [+](/Users/dante/github/manual-legaltech/+) para papers, notas atómicas, instrucciones y scripts de apoyo.

## Propósito

Construir un manual universitario práctico para estudiantes de Derecho, orientado a pensamiento computacional, automatización, datos, web, nube, ciberseguridad e inteligencia artificial aplicada al entorno jurídico.

## Estructura principal

- [_quarto.yml](/Users/dante/github/manual-legaltech/_quarto.yml): configuración general del libro y orden de capítulos.
- [index.qmd](/Users/dante/github/manual-legaltech/index.qmd): portada del manual.
- [parte-0](/Users/dante/github/manual-legaltech/parte-0): páginas iniciales.
- [parte-1-modulo-1](/Users/dante/github/manual-legaltech/parte-1-modulo-1) a [parte-4-modulo-4](/Users/dante/github/manual-legaltech/parte-4-modulo-4): módulos del curso.
- [evaluaciones](/Users/dante/github/manual-legaltech/evaluaciones): evaluaciones y exámenes.
- [referencias.qmd](/Users/dante/github/manual-legaltech/referencias.qmd): bibliografía final.
- [styles.css](/Users/dante/github/manual-legaltech/styles.css): estilos personalizados.
- [images](/Users/dante/github/manual-legaltech/images): imágenes del libro.
- [docs](/Users/dante/github/manual-legaltech/docs): salida renderizada del sitio.

## Carpeta `+`

La carpeta [+](/Users/dante/github/manual-legaltech/+) concentra el sistema auxiliar del proyecto:

- [+/x](/Users/dante/github/manual-legaltech/+/x): instrucciones operativas y scripts.
- [+/y](/Users/dante/github/manual-legaltech/+/y): papers en PDF y sus conversiones a Markdown.
- [+/z](/Users/dante/github/manual-legaltech/+/z): notas atómicas en lógica zettelkasten.

Punto de entrada recomendado:
[+/README.md](/Users/dante/github/manual-legaltech/+/README.md)

## Requisitos

- [Quarto](https://quarto.org/) instalado localmente.

## Uso

Renderizar el libro:

```bash
quarto render
```

Vista previa local:

```bash
quarto preview
```

Convertir nuevos papers agregados a `+/y/papers`:

```bash
./+/x/scripts/convert_papers.sh --new
```

## Criterio editorial

El libro debe mantenerse como un manual autocontenido, claro y pedagógico. Las instrucciones internas, notas metodológicas, propuestas de citas y materiales de apoyo no deben vivir dentro de los capítulos, sino en la carpeta `+`.

El plan editorial vigente está en [+/x/editorial/PLAN.md](/Users/dante/github/manual-legaltech/+/x/editorial/PLAN.md).

## Estado actual

El repositorio ya tiene una estructura funcional de libro web y una infraestructura auxiliar más ordenada para investigación, citas, estilo y continuidad editorial. La línea natural de trabajo es seguir fortaleciendo capítulos, bibliografía y notas de apoyo sin mezclar esas capas entre sí.
