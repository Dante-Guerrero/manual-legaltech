# Mapa de `+/x`

La carpeta `+/x` es la zona de coordinación del subsistema auxiliar. Aquí no viven ni las fuentes ni las notas atómicas, sino los documentos y scripts que permiten operar el sistema con orden.

## Estructura interna

`+/x` se organiza en tres áreas:

- [+/x/instrucciones](/Users/dante/github/manual-legaltech/+/x/instrucciones): guías operativas y documentos de aplicación.
- [+/x/editorial](/Users/dante/github/manual-legaltech/+/x/editorial): documentos normativos del manual que fijan criterios relativamente estables y no funcionan como instructivos.
- [+/x/scripts](/Users/dante/github/manual-legaltech/+/x/scripts): scripts utilitarios y código asociado a este espacio de trabajo.

## Qué va en `+/x/editorial`

Aquí deben vivir los documentos rectores del proyecto cuando su función principal sea **normativa o definicional**, no instructiva.

Hoy esta carpeta contiene:

- [PLAN.md](/Users/dante/github/manual-legaltech/+/x/editorial/PLAN.md): documento rector editorial y pedagógico.
- [formulacion-estilo-autor-manual.md](/Users/dante/github/manual-legaltech/+/x/editorial/formulacion-estilo-autor-manual.md): definición estable de la voz deseada del manual.

## Qué va en `+/x/instrucciones`

Aquí deben vivir los documentos que explican **cómo usar el sistema** o cómo aplicar criterios ya fijados.

Hoy esta carpeta contiene:

- [cambios-estilo-capitulos-2-3-4-segun-estilo-del-autor.md](/Users/dante/github/manual-legaltech/+/x/instrucciones/cambios-estilo-capitulos-2-3-4-segun-estilo-del-autor.md): lista aplicada de ajustes de estilo.
- [instrucciones-conversion-papers.md](/Users/dante/github/manual-legaltech/+/x/instrucciones/instrucciones-conversion-papers.md): procedimiento para incorporar y convertir papers.
- [papers-convertidos.md](/Users/dante/github/manual-legaltech/+/x/instrucciones/papers-convertidos.md): lista de control de PDF ya convertidos.
- [propuestas-citas-capitulos-2-3-4.md](/Users/dante/github/manual-legaltech/+/x/instrucciones/propuestas-citas-capitulos-2-3-4.md): documento de trabajo para inserción de citas.

## Regla práctica de clasificación

Si un archivo fija un criterio general y puede durar como referencia estable, conviene que vaya en `+/x/editorial`.

Si un archivo explica un procedimiento, una forma de uso o una aplicación concreta de esos criterios, conviene que vaya en `+/x/instrucciones`.

Si un archivo ejecuta una tarea, conviene que vaya en `+/x/scripts`.

## Qué no debería pasar

- `+/x/editorial` no debería llenarse de listas de tareas o instructivos operativos.
- `+/x/instrucciones` no debería duplicar definiciones ya estables en `+/x/editorial`.
- `+/x/scripts` no debería usarse como depósito de documentación narrativa.

## Relación con otras carpetas

- `+/y` conserva las fuentes.
- `+/z` conserva las ideas extraídas de las fuentes.
- `+/x` conserva los criterios, las instrucciones y las herramientas para usar ambas cosas en el manual.
