# Continuidad de trabajo: capítulo 2 y criterios editoriales

Este archivo resume los principales acuerdos, cambios y criterios de trabajo surgidos durante la conversación sobre el capítulo 2 del manual. Su función es permitir retomar el trabajo con contexto suficiente, sin repetir decisiones ya tomadas.

## Estado actual del capítulo 2

El archivo `parte-1-modulo-1/02-capitulo.qmd` fue reestructurado de forma importante. Ya no debe entenderse como un borrador técnico ni como un apunte interno, sino como un capítulo pedagógico, autocontenido y listo para estudiantes de Derecho que se están iniciando en Python.

Actualmente, el capítulo:

- abre con una explicación de qué es Python y por qué importa para estudiantes de Derecho;
- incorpora una sección de historia breve de Python con citas académicas y oficiales;
- incluye una línea de tiempo integrada como ilustración dentro de esa historia, no como sección aparte;
- presenta al inicio un apartado de "Qué aprenderás en esta sesión" redactado como invitación a leer;
- contiene un bloque amplio de ejercicios prácticos progresivos, explicados paso a paso;
- termina con "Ideas clave" y luego con "Para pensar y reflexionar".

## Decisiones editoriales ya tomadas

### 1. El manual debe ser autocontenido

No deben aparecer referencias visibles dentro de los capítulos a:

- la carpeta `x`;
- archivos auxiliares usados durante el proceso de construcción;
- instrucciones internas de edición;
- PSET, repositorios, entregables técnicos, Git o GitHub, salvo que una futura decisión pedagógica explícita los reincorpore.

Todo lo que el estudiante necesita leer debe estar en el propio capítulo o en las secciones públicas del libro.

### 2. Los capítulos no deben contener instrucciones editoriales internas

Se eliminó del capítulo 2 cualquier recordatorio del tipo:

- "citar en APA 7";
- "añadir la fuente a `bibliografia.bib`";
- mensajes dirigidos a la persona editora y no al estudiante.

Ese tipo de reglas debe vivir en documentación interna del repositorio, no en el texto del manual.

### 3. La bibliografía se centraliza al final del libro

Ya se configuró Quarto para que:

- los capítulos no muestren bibliografía local al final;
- las referencias aparezcan concentradas en `referencias.qmd`.

Esto se logró con:

- `bibliography: bibliografia.bib`;
- `suppress-bibliography: true` en `_quarto.yml`;
- un bloque `::: {#refs}` en `referencias.qmd`.

## Criterios de estilo para el capítulo 2

### 1. Explicación muy didáctica

El usuario pidió una redacción paciente, progresiva y clara. El capítulo debe asumir que el lector:

- estudia Derecho;
- puede no haber programado nunca;
- necesita explicaciones lentas, explícitas y sin jerga innecesaria.

No basta con presentar código: hay que explicar qué hace, por qué se usa y qué se observa al ejecutarlo.

### 2. Estructura natural, no excesivamente técnica

En una etapa previa, los ejercicios fueron organizados con subtítulos rígidos como:

- "Qué aspecto del lenguaje se aprenderá";
- "Código completo del ejercicio";
- "Explicación paso a paso";
- "Qué ocurre al ejecutarlo".

Luego se decidió suavizar esa estructura para que la lectura se sienta más natural y más atractiva, aunque manteniendo esas funciones pedagógicas dentro del texto.

La idea vigente es:

- títulos más expresivos y motivadores para cada ejercicio;
- introducciones que den contexto;
- explicación paso a paso integrada en la prosa;
- indicación explícita de qué se ve en la terminal y por qué ocurre.

### 3. Títulos de ejercicios más "vendedores"

Se acordó que los títulos de los ejercicios no deben sonar como nombres de carpeta o etiquetas de laboratorio. Deben ser más memorables, sugerentes y amigables.

Ejemplos ya aplicados:

- "La iniciación: el primer código que casi todo programador escribe";
- "Hacer que el programa te escuche";
- "Domar el texto: limpiar, separar y transformar".

### 4. Aprendizajes formulados como aprendizajes, no como descripción del ejercicio

En "Ideas clave" se corrigió una formulación repetitiva del tipo "El ejercicio de... muestra/enseña...". La decisión vigente es que ese apartado debe formular directamente qué se aprendió, sin depender de esa muletilla.

## Contenido actual de ejercicios en el capítulo 2

El apartado "Ejercicios prácticos para aprender los fundamentos de Python" ya integra los ejercicios que originalmente estaban separados en:

- básicos;
- listas;
- texto.

Esos contenidos ahora aparecen como una única secuencia pedagógica, sin mencionar carpetas del repositorio.

Los temas ya incorporados son:

- `print()` y salida en pantalla;
- variables y tipos de datos;
- `input()` y entrada del usuario;
- conversión de tipos;
- operadores y comparaciones;
- condicionales simples;
- condicionales con múltiples opciones;
- bucles `for`;
- bucles `while`;
- funciones;
- listas y `len()`;
- `zip()` para recorrer listas relacionadas;
- `sorted()` para ordenar;
- funciones de texto como `strip()`, `lower()`, `upper()`, `split()`, `replace()`, `startswith()` y `endswith()`.

## Relación entre capítulos 2 y 3

Se movió un ejemplo jurídico más claro hacia `parte-1-modulo-1/03-capitulo.qmd`, porque se entendió que:

- el capítulo 2 debe concentrarse en fundamentos de Python;
- el capítulo 3 debe empezar a combinar esos fundamentos en lógica jurídica y automatización básica.

En consecuencia:

- el capítulo 2 ya no debe cargar ejemplos jurídicos más complejos que distraigan de la iniciación;
- el capítulo 3 puede desarrollar decisiones jurídicas, admisibilidad preliminar, observaciones y modelos condicionales más ricos.

## Fuentes y citas ya integradas

Se reforzó el criterio de que toda afirmación sustantiva basada en fuentes debe citarse en APA 7 y registrarse en `bibliografia.bib`.

En particular, el capítulo 2 ya usa referencias vinculadas a:

- educación jurídica y tecnología;
- pensamiento crítico y enseñanza de código;
- analítica legal e IA aplicada al derecho;
- ecosistema técnico de Python;
- historia y evolución del lenguaje.

También se añadieron nuevas entradas a `bibliografia.bib`, incluyendo referencias oficiales y académicas relevantes.

## Reglas ortográficas y lingüísticas

Se dejó explícito que el manual debe mantener:

- tildes correctas;
- uso de `ñ`;
- signos de apertura cuando correspondan;
- redacción cuidada en español.

No deben quedar restos de versiones sin acentos ni texto de borrador apresurado.

## Qué conviene recordar para la próxima conversación

Si se retoma el trabajo sobre el capítulo 2 o capítulos cercanos, conviene partir de estos supuestos:

1. El capítulo 2 ya fue profundamente reescrito; futuras mejoras deberían ser incrementales, no una nueva reestructuración total salvo necesidad fuerte.
2. Toda edición debe preservar el carácter autocontenido del manual.
3. La pedagogía debe seguir siendo progresiva, explícita y amable con lectores no técnicos.
4. Las citas deben mantenerse consistentes con APA 7 y `bibliografia.bib`.
5. Las decisiones de estilo ya favorecen una prosa más humana, menos esquemática y más orientada a estudiantes de Derecho.

## Próximas líneas plausibles de trabajo

Si el trabajo continúa, algunos siguientes pasos razonables podrían ser:

- seguir afinando la prosa del capítulo 2 si el usuario quiere un tono aún más cálido o más académico;
- revisar si el capítulo 3 mantiene una progresión perfectamente coherente respecto del 2;
- pulir otros capítulos del módulo 1 para que compartan la misma voz pedagógica;
- revisar si hace falta limpiar o actualizar otros archivos auxiliares en `x/readmes`.

En síntesis, el gran aprendizaje de esta interacción es que el manual no debe parecer una colección de scripts ni una documentación interna de repositorio. Debe leerse como un libro de iniciación tecnológica para juristas: serio, claro, útil, bien citado y pedagógicamente hospitalario.
