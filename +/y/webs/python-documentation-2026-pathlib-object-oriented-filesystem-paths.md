# pathlib - Object-oriented filesystem paths

- Tipo: extracto web
- Sitio: Python Documentation
- Clave bibliografica: `pythonpathlib2026`
- URL: `https://docs.python.org/3.14/library/pathlib.html`
- Fecha de consulta en bibliografia: `2026-05-24`
- Capitulo(s) donde podria citarse: 3, 4
- Temas: pathlib, archivos, rutas, filesystem

## Resumen util

La documentacion de `pathlib` presenta las rutas de archivos como objetos con operaciones propias, en lugar de tratarlas solo como cadenas de texto. Esa idea es muy valiosa para los capitulos 3 y 4, porque gran parte del trabajo practico del modulo depende de abrir, guardar, nombrar y recorrer archivos con mayor orden.

La propia pagina muestra ejemplos de composicion de rutas, comprobacion de propiedades y apertura de archivos desde objetos `Path`. Esto permite defender una pequeña regla metodologica del manual: cuando los scripts empiezan a producir documentos y leer CSV o textos, conviene pensar las rutas como parte del problema y no como un detalle improvisado.

## Datos puntuales aprovechables

- `pathlib` ofrece clases para representar rutas de archivos con semantica adecuada al sistema operativo.
- La clase `Path` suele ser la opcion mas conveniente para tareas comunes.
- Las rutas pueden componerse con el operador `/`.
- Los objetos `Path` permiten consultar existencia, tipo y apertura de archivos.

## Posibles usos en el manual

- respaldar ejercicios de lectura y escritura de archivos;
- justificar el uso de `Path(__file__).parent` y subcarpetas como `data`;
- reforzar la idea de trazabilidad y orden en automatizacion documental.
