# Mapa de `+`

La carpeta `+` es el subsistema auxiliar del manual. Aquí no vive el texto principal del libro, sino la infraestructura que permite investigarlo, documentarlo y sostener su continuidad editorial.

## Estructura general

`+` se organiza en tres áreas:

- [+/x](/Users/dante/github/manual-legaltech/+/x): coordinación del sistema.
- [+/y](/Users/dante/github/manual-legaltech/+/y): repositorio documental clasificado.
- [+/z](/Users/dante/github/manual-legaltech/+/z): notas atómicas reutilizables.

## Qué contiene `+/x`

`+/x` se divide en:

- [+/x/editorial](/Users/dante/github/manual-legaltech/+/x/editorial): documentos normativos del manual.
- [+/x/instrucciones](/Users/dante/github/manual-legaltech/+/x/instrucciones): guías operativas y documentos de aplicación.
- [+/x/scripts](/Users/dante/github/manual-legaltech/+/x/scripts): scripts utilitarios.

### `+/x/editorial`

Aquí van los documentos rectores del proyecto cuando su función es normativa o definicional.

- [PLAN.md](/Users/dante/github/manual-legaltech/+/x/editorial/PLAN.md)
- [formulacion-estilo-autor-manual.md](/Users/dante/github/manual-legaltech/+/x/editorial/formulacion-estilo-autor-manual.md)

### `+/x/instrucciones`

Aquí van los documentos que explican cómo usar el sistema o cómo aplicar criterios ya fijados.

- [cambios-estilo-capitulos-2-3-4-segun-estilo-del-autor.md](/Users/dante/github/manual-legaltech/+/x/instrucciones/cambios-estilo-capitulos-2-3-4-segun-estilo-del-autor.md)
- [instrucciones-conversion-documentos.md](/Users/dante/github/manual-legaltech/+/x/instrucciones/instrucciones-conversion-documentos.md)
- [convertidos-papers.md](/Users/dante/github/manual-legaltech/+/x/instrucciones/convertidos-papers.md)
- [convertidos-libros-manuales.md](/Users/dante/github/manual-legaltech/+/x/instrucciones/convertidos-libros-manuales.md)
- [convertidos-normas.md](/Users/dante/github/manual-legaltech/+/x/instrucciones/convertidos-normas.md)
- [convertidos-jurisprudencia.md](/Users/dante/github/manual-legaltech/+/x/instrucciones/convertidos-jurisprudencia.md)
- [propuestas-citas-capitulos-2-3-4.md](/Users/dante/github/manual-legaltech/+/x/instrucciones/propuestas-citas-capitulos-2-3-4.md)

## Qué contiene `+/y`

`+/y` es la zona de fuentes documentales.

Contiene:

- [+/y/+ entrada](/Users/dante/github/manual-legaltech/+/y/+%20entrada): bandeja de entrada de documentos no clasificados.
- [+/y/papers](/Users/dante/github/manual-legaltech/+/y/papers)
- [+/y/normas](/Users/dante/github/manual-legaltech/+/y/normas)
- [+/y/libros-manuales](/Users/dante/github/manual-legaltech/+/y/libros-manuales)
- [+/y/jurisprudencia](/Users/dante/github/manual-legaltech/+/y/jurisprudencia)

Cada tipo documental usa la misma convención:

- `pdf`
- `markdown`

## Qué contiene `+/z`

`+/z` guarda notas atómicas. Cada archivo contiene una sola idea reutilizable extraída de un documento fuente y pensada para alimentar el manual, las propuestas de citas o futuras reescrituras.

## Reglas de clasificación

Si un archivo fija un criterio general y relativamente estable, conviene que vaya en `+/x/editorial`.

Si un archivo explica un procedimiento o una forma de uso, conviene que vaya en `+/x/instrucciones`.

Si un archivo ejecuta una tarea, conviene que vaya en `+/x/scripts`.

Si un archivo fuente aún no ha sido clasificado, debe ir temporalmente en `+/y/+ entrada`.

Si un archivo fuente ya fue clasificado, debe vivir en `+/y/<tipo>/pdf` o `+/y/<tipo>/markdown`.

Si un archivo es una idea breve extraída de una fuente, debe ir en `+/z`.
