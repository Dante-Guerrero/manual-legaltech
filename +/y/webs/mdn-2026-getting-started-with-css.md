# Getting started with CSS

- Tipo: extracto web
- Sitio: MDN Web Docs
- Clave bibliografica: `mdncss2026`
- URL: `https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Getting_started`
- Fecha de consulta en bibliografia: `2026-05-24`
- Capitulo(s) donde podria citarse: 7
- Temas: css, estilos, hojas-de-estilo, separacion-de-capas

## Resumen util

La guia introductoria de MDN sobre CSS muestra de forma muy concreta como vincular un archivo `styles.css` con un documento `index.html` mediante un elemento `<link>`. Eso sirve para sostener la idea de que HTML y CSS cumplen funciones distintas y conviene mantenerlas separadas.

La misma guia compara hojas externas, internas e inline, y deja ver por que los estilos externos son la opcion mas mantenible cuando hay varias paginas. Esa observacion es especialmente util para el curso porque conecta legibilidad tecnica con mantenimiento futuro.

## Datos puntuales aprovechables

- Un archivo CSS externo usa extension `.css`.
- Puede enlazarse desde HTML con `<link rel="stylesheet" href="styles.css" />`.
- MDN presenta las hojas externas como la opcion mas comun y util para compartir estilo entre varias paginas.
- La propia guia desaconseja el uso excesivo de estilos inline por razones de mantenimiento y claridad.

## Posibles usos en el manual

- explicar con precision la diferencia entre estructura y presentacion;
- justificar por que conviene separar archivos HTML y CSS en ejercicios del curso;
- apoyar una nocion minima de mantenibilidad web.
