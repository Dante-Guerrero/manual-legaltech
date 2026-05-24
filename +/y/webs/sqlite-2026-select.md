# SELECT

- Tipo: extracto web
- Sitio: SQLite Documentation
- Clave bibliografica: `sqliteselect2026`
- URL: `https://www.sqlite.org/lang_select.html`
- Fecha de consulta en bibliografia: `2026-05-24`
- Capitulo(s) donde podria citarse: 6
- Temas: sql, sqlite, select, consultas

## Resumen util

La pagina oficial de SQLite sobre `SELECT` sirve para introducir la intuicion de consulta que aparece al final del capitulo 6. La documentacion explica que `SELECT` se usa para consultar la base de datos y que su resultado son cero o mas filas con un numero fijo de columnas, sin modificar los datos.

Ademas, la estructura de la pagina muestra con claridad las operaciones mentales basicas de una consulta: `FROM`, `WHERE`, `DISTINCT`, `ORDER BY` y `LIMIT`. Eso encaja muy bien con la transicion pedagogica desde tablas pequenas hacia preguntas mas estructuradas.

## Datos puntuales aprovechables

- `SELECT` se usa para consultar la base de datos.
- El resultado de una consulta son filas con un numero fijo de columnas.
- Una consulta `SELECT` no altera la base de datos.
- La documentacion separa etapas clave como origen de datos, filtrado, ordenamiento y limite de resultados.

## Posibles usos en el manual

- introducir SQL como una extension natural de preguntas hechas sobre tablas;
- explicar que consultar no es lo mismo que modificar datos;
- reforzar la idea de filtrar, ordenar y limitar resultados con proposito.
