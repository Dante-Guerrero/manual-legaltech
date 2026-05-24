# Getting started

- Tipo: extracto web
- Sitio: pandas Documentation
- Clave bibliografica: `pandasgettingstarted2026`
- URL: `https://pandas.pydata.org/pandas-docs/stable/getting_started/index.html`
- Fecha de consulta en bibliografia: `2026-05-24`
- Capitulo(s) donde podria citarse: 3
- Temas: pandas, dataframe, csv, datos-tabulares

## Resumen util

La guia de inicio de pandas presenta la biblioteca como una herramienta adecuada para trabajar con datos tabulares, especialmente cuando vienen de hojas de calculo, bases de datos o archivos como CSV. Eso coincide de manera casi exacta con la transicion que hace el capitulo 3 desde archivos y registros sueltos hacia tablas mas expresivas.

Resulta muy util que la documentacion introduzca al `DataFrame` como la tabla principal de pandas y que subraye las funciones `read_*` y `to_*` para importar y exportar datos. Para el manual, esto ayuda a mostrar que `pandas` no entra como magia analitica, sino como una ampliacion natural del trabajo con registros.

## Datos puntuales aprovechables

- pandas se presenta como una herramienta adecuada para datos tabulares.
- La estructura central de trabajo es el `DataFrame`.
- La biblioteca soporta de forma nativa multiples fuentes como CSV, Excel, SQL, JSON y Parquet.
- Las funciones `read_*` permiten importar datos y los metodos `to_*` permiten guardarlos.

## Posibles usos en el manual

- apoyar la introduccion pedagogica a `DataFrame`;
- justificar el paso desde `csv.DictReader()` hacia una exploracion tabular mas potente;
- reforzar que leer, filtrar y resumir tablas forma parte de una misma logica de trabajo.
