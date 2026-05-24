# Subsistema auxiliar del manual

La carpeta `+` reúne el **subsistema auxiliar** del proyecto. Su función es sostener el trabajo editorial, bibliográfico y metodológico del manual sin mezclar esos materiales con los capítulos del libro.

En otras palabras: el libro vive en los archivos `.qmd` del repositorio principal; `+` contiene la infraestructura de apoyo que permite recibir documentos, clasificarlos, convertirlos a Markdown, extraer ideas, formular citas y mantener continuidad editorial.

## Qué problema resuelve

Este subsistema existe para evitar cuatro problemas frecuentes:

- dispersión de instrucciones metodológicas;
- acumulación caótica de documentos fuente;
- pérdida de trazabilidad entre fuentes, notas e inserciones posibles;
- contaminación de los capítulos con notas internas que no deben llegar al lector.

## Estructura general

- [+/x](/Users/dante/github/manual-legaltech/+/x): capa operativa del sistema.
- [+/y](/Users/dante/github/manual-legaltech/+/y): repositorio documental clasificado.
- [+/z](/Users/dante/github/manual-legaltech/+/z): capa de notas atómicas reutilizables.

## Cómo funciona el sistema

El funcionamiento completo de `+` puede entenderse como una secuencia de trabajo:

1. **Entran documentos sin clasificar** en `+/y/+ entrada`.
2. **Se clasifican** en una categoría documental dentro de `+/y`.
3. **Si son PDF**, se almacenan en la subcarpeta `pdf` de esa categoría.
4. **Si son PDF**, se convierten a Markdown en la subcarpeta `markdown` correspondiente.
5. **Si son fuentes web**, se registran como extractos en `+/y/webs`.
6. **Se leen y descomponen** en ideas pequeñas que pasan a `+/z`.
7. **Se organizan criterios, instrucciones y propuestas** en `+/x`.
8. **Se usan esos materiales** para mejorar capítulos, insertar citas o mantener consistencia editorial en el manual.

La lógica es deliberadamente acumulativa: `+/y` conserva las fuentes, `+/z` conserva ideas reutilizables, y `+/x` conserva la memoria operativa y editorial del sistema.

## Función de cada carpeta

### `+/x`

Es la zona de coordinación del subsistema.

Contiene tres subcarpetas:

- [+/x/instrucciones](/Users/dante/github/manual-legaltech/+/x/instrucciones): guías operativas, procedimientos y documentos de aplicación.
- [+/x/editorial](/Users/dante/github/manual-legaltech/+/x/editorial): documentos normativos del manual que fijan criterios relativamente estables y no funcionan como instructivos.
- [+/x/scripts](/Users/dante/github/manual-legaltech/+/x/scripts): scripts utilitarios para conversión y materiales de código asociados a este espacio de trabajo.

### `+/y`

Es la zona de fuentes documentales.

Contiene una bandeja de entrada y varias categorías:

- [+/y/+ entrada](/Users/dante/github/manual-legaltech/+/y/+%20entrada): documentos todavía no clasificados.
- [+/y/papers](/Users/dante/github/manual-legaltech/+/y/papers): artículos y papers.
- [+/y/normas](/Users/dante/github/manual-legaltech/+/y/normas): normas y textos regulatorios.
- [+/y/libros-manuales](/Users/dante/github/manual-legaltech/+/y/libros-manuales): libros, manuales y materiales extensos equivalentes.
- [+/y/jurisprudencia](/Users/dante/github/manual-legaltech/+/y/jurisprudencia): decisiones o materiales jurisprudenciales.
- [+/y/webs](/Users/dante/github/manual-legaltech/+/y/webs): extractos manuales en Markdown de documentacion web citable.

Cada categoría documental usa la misma estructura:

- `pdf`
- `markdown`

La excepcion es `+/y/webs`, porque ahi no se almacenan PDF para convertir, sino archivos `.md` preparados manualmente.

### `+/z`

Es la zona de elaboración intelectual intermedia.

Contiene notas atómicas: una idea por archivo, extraída de una fuente concreta, con indicación de utilidad potencial para el manual.

Su función es transformar documentos extensos en piezas pequeñas, trazables y reutilizables que luego puedan alimentar citas, argumentos, transiciones o reescrituras.

## Flujo operativo principal

### 1. Ingresar documentos

Todo documento nuevo debería entrar primero en `+/y/+ entrada`.

### 2. Clasificar documentos

Antes de convertirlo, cada archivo debe moverse a una categoría:

- `papers`
- `normas`
- `libros-manuales`
- `jurisprudencia`

Después debe quedar en la subcarpeta `pdf` de esa categoría.

Si la fuente es una web ya citada o potencialmente citable, no pasa por esta bandeja de entrada: se resume directamente en `+/y/webs`.

### 3. Convertir documentos

Para convertir documentos nuevos de una categoría:

```bash
./+/x/scripts/convert_documents.sh papers --new
```

Ejemplos equivalentes:

```bash
./+/x/scripts/convert_documents.sh libros-manuales --new
./+/x/scripts/convert_documents.sh normas --new
./+/x/scripts/convert_documents.sh jurisprudencia --new
```

Para reconstruir todas las conversiones de una categoría:

```bash
./+/x/scripts/convert_documents.sh papers --all
```

El wrapper histórico para papers sigue existiendo:

```bash
./+/x/scripts/convert_papers.sh --new
```

### 4. Registrar fuentes web

Cuando una cita del manual provenga de una pagina web:

- crear un extracto en `+/y/webs`;
- registrar URL, fecha de consulta, clave bibliografica y puntos utiles;
- derivar una o mas notas atomicas en `+/z` si la fuente contiene ideas reutilizables.

### 5. Extraer notas atómicas

Despues de leer los archivos convertidos en `+/y/<tipo>/markdown` o los extractos de `+/y/webs`, las ideas utiles deben pasar a `+/z` como notas independientes. La regla es simple: **una idea principal por archivo**.

### 6. Reutilizar el material

Las notas de `+/z` y los documentos de `+/x` sirven para:

- actualizar propuestas de citas;
- sostener reescrituras de capítulos;
- mantener continuidad de estilo;
- evitar releer todo el corpus desde cero cada vez.

## Qué no debe pasar

Este subsistema está pensado para apoyar el libro, no para invadirlo. Por eso:

- los capítulos del manual no deben contener instrucciones internas;
- `+/z` no debe llenarse de notas demasiado amplias o mezcladas;
- `+/y/+ entrada` no debe volverse un archivo permanente de documentos sin clasificar;
- una categoría documental no debería mezclar PDFs y Markdown fuera de sus subcarpetas `pdf` y `markdown`;
- `+/y/webs` no deberia llenarse de enlaces sueltos sin extracto util;
- `+/x/instrucciones` no debe duplicar información innecesariamente si ya existe un instructivo claro.

## Punto de entrada recomendado

Si vas a continuar o retomar el trabajo, el orden más útil es este:

1. [+/x/editorial/PLAN.md](/Users/dante/github/manual-legaltech/+/x/editorial/PLAN.md)
2. [+/x/instrucciones/estructura-del-directorio.md](/Users/dante/github/manual-legaltech/+/x/instrucciones/estructura-del-directorio.md)
3. [+/x/instrucciones/instrucciones-conversion-documentos.md](/Users/dante/github/manual-legaltech/+/x/instrucciones/instrucciones-conversion-documentos.md)
4. [+/z/instrucciones.md](/Users/dante/github/manual-legaltech/+/z/instrucciones.md)

## Idea central

La carpeta `+` no es un anexo decorativo del repositorio. Es el sistema que permite que el manual crezca con método: clasifica fuentes, conserva trazabilidad, separa instrucciones de materiales y ayuda a que la investigación y la edición no se mezclen desordenadamente con el texto final del libro.
