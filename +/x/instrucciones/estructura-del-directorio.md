# Estructura del directorio `+`

La carpeta `+` concentra los materiales auxiliares del proyecto en tres zonas claramente diferenciadas.

## Estructura general

- `+/x`: documentación operativa y scripts.
- `+/y`: corpus de papers en PDF y sus conversiones a Markdown.
- `+/z`: notas atómicas en lógica zettelkasten.

## Qué va en `+/x`

`+/x/instrucciones` reúne archivos Markdown que explican cómo se usa este subsistema: flujos de conversión, criterios de citas, formulaciones de estilo y notas metodológicas.

`+/x/scripts` reúne los scripts utilitarios y, de forma conservadora, también el directorio `ejercicios de Python`, que contiene código de apoyo ya existente en el repositorio.

## Qué va en `+/y`

`+/y/papers` guarda los PDF originales.

`+/y/papers_md` guarda la versión Markdown de cada PDF, con el mismo nombre base.

## Qué va en `+/z`

`+/z` guarda notas atómicas. Cada archivo contiene una sola idea reutilizable extraída de un paper y pensada para alimentar el manual, las propuestas de citas o futuras reescrituras.

## Regla práctica

Si un archivo nuevo explica la lógica del sistema, debe ir en `+/x/instrucciones`.

Si un archivo nuevo ejecuta o automatiza una tarea, debe ir en `+/x/scripts`.

Si un archivo nuevo es un paper fuente, debe ir en `+/y/papers` o en `+/y/papers_md` según corresponda.

Si un archivo nuevo es una idea breve extraída de un paper, debe ir en `+/z`.
