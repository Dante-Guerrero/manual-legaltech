# Subsistema auxiliar del manual

La carpeta `+` reúne el **subsistema auxiliar** del proyecto. Su función es sostener el trabajo editorial, bibliográfico y metodológico del manual sin mezclar esos materiales con los capítulos del libro.

En otras palabras: el libro vive en los archivos `.qmd` del repositorio principal; `+` contiene la infraestructura de apoyo que permite investigar, convertir papers, extraer ideas, formular citas y mantener continuidad editorial.

## Qué problema resuelve

Este subsistema existe para evitar cuatro problemas frecuentes:

- dispersión de instrucciones metodológicas;
- acumulación caótica de papers y conversiones;
- pérdida de trazabilidad entre fuentes, notas e inserciones posibles;
- contaminación de los capítulos con notas internas que no deben llegar al lector.

## Estructura general

- [+/x](/Users/dante/github/manual-legaltech/+/x): capa operativa del sistema.
- [+/y](/Users/dante/github/manual-legaltech/+/y): corpus de papers fuente y sus conversiones.
- [+/z](/Users/dante/github/manual-legaltech/+/z): capa de notas atómicas reutilizables.

## Cómo funciona el sistema

El funcionamiento completo de `+` puede entenderse como una secuencia de trabajo:

1. **Entran fuentes** en `+/y/papers`.
2. **Se convierten** a Markdown en `+/y/papers_md`.
3. **Se leen y descomponen** en ideas pequeñas que pasan a `+/z`.
4. **Se organizan criterios, instrucciones y propuestas** en `+/x/instrucciones`.
5. **Se usan esos materiales** para mejorar capítulos, insertar citas o mantener consistencia editorial en el manual.

La lógica es deliberadamente acumulativa: `+/y` conserva las fuentes, `+/z` conserva ideas reutilizables, y `+/x` conserva la memoria operativa del sistema.

## Función de cada carpeta

### `+/x`

Es la zona de coordinación del subsistema.

Contiene dos subcarpetas:

- [+/x/instrucciones](/Users/dante/github/manual-legaltech/+/x/instrucciones): documentos Markdown que explican reglas, flujos, criterios de estilo, plan editorial y uso del sistema.
- [+/x/scripts](/Users/dante/github/manual-legaltech/+/x/scripts): scripts utilitarios para conversión y materiales de código asociados a este espacio de trabajo.

Regla práctica:
si un archivo explica cómo usar el sistema, debe vivir en `+/x/instrucciones`; si ejecuta una tarea, debe vivir en `+/x/scripts`.

### `+/y`

Es la zona de fuentes.

Contiene:

- [+/y/papers](/Users/dante/github/manual-legaltech/+/y/papers): PDF originales.
- [+/y/papers_md](/Users/dante/github/manual-legaltech/+/y/papers_md): versión Markdown de cada PDF.

Su función no es interpretar las fuentes, sino conservarlas y prepararlas para lectura y extracción de ideas.

### `+/z`

Es la zona de elaboración intelectual intermedia.

Contiene notas atómicas: una idea por archivo, extraída de una fuente concreta, con indicación de utilidad potencial para el manual.

Su función es transformar papers extensos en piezas pequeñas, trazables y reutilizables que luego puedan alimentar citas, argumentos, transiciones o reescrituras.

## Flujo operativo principal

### 1. Agregar nuevos papers

Los PDF nuevos deben entrar en `+/y/papers` con el formato:

`autor-año-titulo-del-paper.pdf`

### 2. Convertir papers

Para convertir solo los nuevos archivos:

```bash
./+/x/scripts/convert_papers.sh --new
```

Para reconstruir todas las conversiones:

```bash
./+/x/scripts/convert_papers.sh --all
```

Como la ruta comienza con `+`, los scripts conviene invocarlos desde la raíz del repositorio con el prefijo `./`.

### 3. Extraer notas atómicas

Después de leer `+/y/papers_md`, las ideas útiles deben pasar a `+/z` como notas independientes. La regla es simple: **una idea principal por archivo**.

### 4. Reutilizar el material

Las notas de `+/z` y los documentos de `+/x/instrucciones` sirven para:

- actualizar propuestas de citas;
- sostener reescrituras de capítulos;
- mantener continuidad de estilo;
- evitar releer todo el corpus desde cero cada vez.

## Qué no debe pasar

Este subsistema está pensado para apoyar el libro, no para invadirlo. Por eso:

- los capítulos del manual no deben contener instrucciones internas;
- `+/z` no debe llenarse de notas demasiado amplias o mezcladas;
- `+/y` no debe usarse como depósito desordenado de archivos sin renombrar;
- `+/x/instrucciones` no debe duplicar información innecesariamente si ya existe un instructivo claro.

## Punto de entrada recomendado

Si vas a continuar o retomar el trabajo, el orden más útil es este:

1. [+/x/instrucciones/PLAN.md](/Users/dante/github/manual-legaltech/+/x/instrucciones/PLAN.md)
2. [+/x/instrucciones/estructura-del-directorio.md](/Users/dante/github/manual-legaltech/+/x/instrucciones/estructura-del-directorio.md)
3. [+/x/instrucciones/instrucciones-conversion-papers.md](/Users/dante/github/manual-legaltech/+/x/instrucciones/instrucciones-conversion-papers.md)
4. [+/z/instrucciones.md](/Users/dante/github/manual-legaltech/+/z/instrucciones.md)

## Idea central

La carpeta `+` no es un anexo decorativo del repositorio. Es el sistema que permite que el manual crezca con método: separa fuentes, notas e instrucciones, conserva trazabilidad y ayuda a que la investigación y la edición no se mezclen desordenadamente con el texto final del libro.
