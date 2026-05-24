# Carpeta `+`

La carpeta `+` reúne el sistema auxiliar de trabajo del proyecto. Su función es separar, en un solo lugar, la documentación operativa, los materiales fuente y las notas de investigación reutilizables.

## Estructura

- [x](/Users/dante/github/manual-legaltech/+/x): documentación operativa y scripts.
- [y](/Users/dante/github/manual-legaltech/+/y): papers en PDF y versiones Markdown.
- [z](/Users/dante/github/manual-legaltech/+/z): notas atómicas para citas, argumentos e ideas reutilizables.

## Lógica de uso

`+/x/instrucciones` contiene los archivos Markdown que explican cómo funciona este subsistema, cómo convertir papers y cómo usar las notas.

`+/x/scripts` contiene los scripts de apoyo para conversiones y otros materiales de código que ya estaban asociados a este espacio de trabajo.

`+/y/papers` contiene los PDF fuente. `+/y/papers_md` contiene sus conversiones a Markdown.

`+/z` contiene notas atómicas en estilo zettelkasten: una idea por archivo, con referencia al paper de origen y utilidad potencial para el manual.

## Flujo típico

1. Agregar o renombrar PDF en `+/y/papers`.
2. Convertir nuevos papers con `./+/x/scripts/convert_papers.sh --new`.
3. Leer los Markdown en `+/y/papers_md`.
4. Extraer ideas reutilizables y volcarlas como notas independientes en `+/z`.
5. Usar esas notas para actualizar propuestas de citas o reforzar capítulos del manual.

## Punto de entrada recomendado

Si necesitas entender o continuar este sistema, empieza por [estructura-del-directorio.md](/Users/dante/github/manual-legaltech/+/x/instrucciones/estructura-del-directorio.md) y luego por [instrucciones-conversion-papers.md](/Users/dante/github/manual-legaltech/+/x/instrucciones/instrucciones-conversion-papers.md).
