# PLAN.md

## Propósito de este documento

Este archivo contiene las instrucciones maestras para que Codex pueda continuar la construcción y redacción del libro web **Manual del curso Legal Tech** sin romper la lógica académica, editorial y técnica del repositorio. La idea es simple, una rareza en proyectos humanos: que el agente no improvise de más, entienda el curso, respete la arquitectura existente y produzca archivos `.qmd` listos para integrarse al libro.

---

## 1. Qué es este proyecto

Este repositorio contiene un **libro web desarrollado en Quarto** para el curso **LEGAL TECH – DER 614** de la **Facultad de Derecho y Economía de la Universidad Científica del Sur**.

El manual cumple una función dual:

1. **Manual de clase**: acompaña las sesiones y sirve de apoyo para estudiantes durante el curso.
2. **Libro web navegable**: organiza contenidos, evaluaciones, referencias y materiales de manera ordenada y clara.

No es un blog, no es una web de marketing, no es un repositorio de apuntes desordenados. Es un **manual universitario serio, pedagógico, usable y visualmente limpio**.

---

## 2. Perfil del público objetivo

El público principal son **estudiantes de pregrado de Derecho**.

Esto implica que:

- Tienen formación jurídica de base.
- No necesariamente saben programar.
- No necesariamente entienden jerga técnica.
- Necesitan ejemplos claros, progresivos y vinculados con problemas jurídicos reales.
- Deben poder leer el manual durante o después de clase sin sentirse expulsados del texto por tecnicismos innecesarios.

### Regla pedagógica central

Cada explicación debe responder, explícita o implícitamente, a una de estas preguntas:

- ¿Qué significa esto?
- ¿Para qué le sirve a un jurista?
- ¿Cómo se conecta con la práctica legal?
- ¿Qué riesgo, oportunidad o transformación introduce en el derecho?

---

## 3. Fuente maestra de contenido

La **fuente maestra** para decidir estructura, secuencia y alcance es el sílabo del curso.

### Datos esenciales del sílabo

- Curso: **Legal Tech – DER 614**
- Naturaleza: **teórico-práctica**
- Propósito: analizar críticamente la intersección entre derecho y nuevas tecnologías, incluyendo IA, economía digital, smart contracts y soluciones tecnológicas aplicadas al ejercicio profesional.
- Resultado general: el estudiante **identifica, analiza y aplica herramientas tecnológicas para resolver problemas jurídicos mediante soluciones legaltech**, dentro de marcos éticos, regulatorios y orientados al acceso a la justicia.

### Estrategia didáctica del curso

El curso promueve **aprendizaje colaborativo** y **aprendizaje basado en problemas**, con sesiones demostrativas, participación activa, discusión y análisis de casos.

### Regla metodológica transversal

Este curso no debe diseñarse como una secuencia de clases meramente expositivas. **Cada sesión debe incluir un componente práctico verificable**.

Eso implica, como criterio general, que en cada sesión el estudiante:

- abra **Visual Studio Code** o el editor de su elección;
- escriba, edite o ejecute algún artefacto concreto;
- use **Git** para registrar cambios;
- use **GitHub** para clonar, consultar, sincronizar o entregar trabajo;
- resuelva un **PSET (Problem Set)** asociado a la sesión o al bloque trabajado;
- trabaje sobre un repositorio real en GitHub, ya sea individual o del curso.

Los artefactos prácticos pueden variar según el módulo. Por ejemplo:

- pseudocódigo o ejercicios de lógica;
- scripts en Python;
- diagramas en Mermaid;
- páginas HTML/CSS/JS;
- archivos de datos o consultas introductorias;
- prompts, bitácoras de evaluación o pequeños flujos de integración.

### Consecuencia editorial de esta regla

El manual no debe explicar tecnología como si bastara con leerla. Cada capítulo de contenido debe preparar una acción concreta en editor y repositorio.

### Recurso visual pedagógico obligatorio

El libro debe usar **callouts de Quarto** de forma intencional para volver el texto más visible, más navegable y más atractivo para estudiantes que leen en pantalla.

Los callouts no son un adorno accidental. Deben servir para:

- capturar atención en momentos clave;
- destacar ideas centrales;
- separar advertencias, recomendaciones o errores frecuentes;
- hacer más amable la lectura web;
- ayudar a que cada sesión tenga puntos de anclaje visual claros.

### Módulos del curso

#### Módulo 1. Pensamiento computacional para juristas
Busca que el estudiante comprenda conceptos fundamentales del pensamiento computacional y pueda representar instrucciones legales en lógica computacional. Incluye pensamiento computacional, desarrollo de software, Git/GitHub y fundamentos de Python.

#### Módulo 2. Automatización y datos jurídicos
Busca que el estudiante automatice documentos legales, procese datos jurídicos y genere reportes. Incluye procesos, BPMN, datos, tablas, bases de datos, SQL, visualización y automatización documental.

#### Módulo 3. Web, nube y seguridad para el sector legal
Busca que el estudiante comprenda la arquitectura básica de la web, la nube y la seguridad aplicadas al sector legal. Incluye HTML/CSS/JS, GitHub Pages, cloud computing y ciberseguridad.

#### Módulo 4. Inteligencia artificial aplicada al Derecho
Busca que el estudiante evalúe capacidades y límites de LLMs en tareas jurídicas, identifique riesgos regulatorios y realice integraciones responsables con Python. Incluye IA, ML, LLMs, auditorías de prompts, controles de cumplimiento, proyecto legaltech y demo day.

### Evaluaciones que el manual debe reflejar

- ED: actividad de familiarización, semana 1, 0%
- EC1: Problem Set, semana 5, 20%
- EP: examen parcial, semana 8, 20%
- EC2: Problem Set, semana 11, 15%
- EC3: presentación de proyecto legaltech, semana 15, 20%
- EF: examen final, semana 16, 25%

---

## 4. Estado actual del repositorio

Antes de escribir cualquier archivo, Codex debe asumir como **estado base** la estructura ya existente.

### Estructura detectada del proyecto

```text
manual-legaltech/
├── _quarto.yml
├── index.qmd
├── styles.css
├── bibliografia.bib
├── referencias.qmd
├── README.md
├── images/
│   ├── portada.png
│   ├── dante.png
│   └── manu.png
├── parte-0/
│   ├── intro.qmd
│   └── profesores.qmd
├── parte-1-modulo-1/
│   ├── 00-presentacion.qmd
│   ├── 01-capitulo.qmd
│   ├── 02-capitulo.qmd
│   ├── 03-capitulo.qmd
│   └── 04-capitulo.qmd
├── parte-2-modulo-2/
│   ├── 00-presentacion.qmd
│   ├── 05-capitulo.qmd
│   └── 06-capitulo.qmd
├── parte-3-modulo-3/
│   ├── 00-presentacion.qmd
│   ├── 07-capitulo.qmd
│   └── 08-capitulo.qmd
├── parte-4-modulo-4/
│   ├── 00-presentacion.qmd
│   ├── 09-capitulo.qmd
│   ├── 10-capitulo.qmd
│   └── 11-capitulo.qmd
└── evaluaciones/
    ├── evaluacion-1.qmd
    ├── examen-parcial.qmd
    ├── evaluacion-2.qmd
    ├── evaluacion-3.qmd
    └── examen-final.qmd
```

### Configuración actual del libro

El archivo `_quarto.yml` ya define que:

- el proyecto usa `project: type: book`
- la salida va a `docs`
- el libro se titula **"Legal Tech, Manual del Curso"**
- la navegación usa capítulos y partes ya organizados
- el tema base HTML es `cosmo`
- los estilos personalizados viven en `styles.css`
- la bibliografía se alimenta de `bibliografia.bib`

### Regla técnica

Codex **no debe reestructurar el repositorio por capricho**. Solo debe modificar la arquitectura si existe una razón técnica clara y compatible con Quarto.

### Cómo debe interpretarse este estado actual

Este apartado describe **lo que hoy existe realmente en el repositorio**. No debe confundirse con el diseño pedagógico final del libro.

En este proyecto conviven tres niveles que Codex debe distinguir siempre:

1. **Estado actual verificado**: lo que ya está creado y referenciado en `_quarto.yml`.
2. **Estado deseado del manual**: la forma en que se quiere que el libro termine quedando, aunque algunos archivos aún estén incompletos.
3. **Trabajo pendiente**: capítulos, evaluaciones o secciones que todavía requieren desarrollo, revisión o reescritura.

### Regla de interpretación crítica

Si `PLAN.md` describe un capítulo con un alcance más preciso que el archivo actual, Codex debe entenderlo como una **meta editorial** y no como evidencia de que ese contenido ya existe.

Por tanto, antes de editar un archivo, debe responder internamente estas preguntas:

- ¿el archivo ya está desarrollado o solo existe como placeholder?;
- ¿el título actual coincide con la meta del plan o todavía hay que ajustarlo?;
- ¿el contenido real ya cubre el alcance esperado o apenas lo insinúa?;
- ¿conviene completar, reescribir o conservar?

---

## 5. Filosofía editorial del manual

El manual debe sentirse como una mezcla de:

- manual universitario serio,
- guía didáctica para clase,
- introducción accesible a tecnología para juristas,
- y recurso práctico que motive a experimentar.

### El texto debe ser

- claro,
- sobrio,
- pedagógico,
- bien estructurado,
- útil en sesión de clase,
- amigable con lectores no técnicos,
- visualmente dinámico sin volverse caótico.

### El texto no debe ser

- grandilocuente,
- excesivamente promocional,
- oscuro o abstracto,
- hipertecnicista,
- infantil,
- una colección de definiciones sin aplicación.

### Tono recomendado

- académico accesible,
- cercano sin perder seriedad,
- riguroso sin sonar enciclopédico,
- orientado a resolver dudas reales del estudiante.

---

## 6. Principios de redacción que Codex debe seguir siempre

### 6.1. Explicar antes de sofisticar

Primero definir con claridad. Luego desarrollar. Después conectar con derecho. Recién al final complejizar.

### 6.2. Conectar tecnología con práctica jurídica

Siempre que sea posible, incluir ejemplos como:

- redacción de documentos,
- revisión contractual,
- gestión de expedientes,
- visualización de datos regulatorios,
- automatización de flujos,
- trazabilidad documental,
- cumplimiento normativo,
- acceso a justicia,
- fiscalización,
- firma digital,
- riesgos de IA en decisiones jurídicas.

### 6.3. Priorizar aprendizaje activo

El contenido no debe limitarse a exponer teoría. Debe favorecer:

- ejercicios,
- preguntas de reflexión,
- mini casos,
- prácticas guiadas,
- actividades de aplicación.

### 6.4. Diseñar cada sesión para abrir el editor

Cada sesión debe asumir que el estudiante abrirá **VS Code** o un editor equivalente para producir algo.

Por tanto, salvo justificación excepcional, toda sesión debe contener:

- una tarea ejecutable o editable en computadora;
- instrucciones mínimas para comenzar a trabajar;
- un resultado observable;
- una actividad que pueda versionarse con Git;
- una conexión con un repositorio de GitHub del curso, del docente o del estudiante.

### 6.5. Escribir para lectura web

Los capítulos deben usar:

- secciones breves y claras,
- subtítulos informativos,
- listas solo cuando ayuden,
 - callouts de Quarto como recurso pedagógico habitual,
- bloques de código solo si son útiles y entendibles.

### 6.6. No escribir como si fuera un paper

Esto no es una tesis. No saturar de citas dentro del flujo principal ni convertir cada párrafo en un museo de apellidos. La bibliografía es importante, pero el estudiante primero debe entender.

---

## 7. Convenciones de formato para todos los archivos `.qmd`

Codex debe producir contenido **directamente compatible con Quarto**.

### 7.1. Encabezado

Cada archivo debe empezar, cuando corresponda, con un título claro en Markdown. Usar YAML solo si hace falta una configuración específica para esa página.

Ejemplo mínimo:

```md
# Módulo 1. Pensamiento computacional para juristas
```

### 7.2. Estructura interna sugerida de capítulos

Cuando se redacte una sesión o capítulo de contenido, usar de manera flexible esta lógica:

```md
# Título

## ¿Por qué importa este tema?

## Qué aprenderás en esta sesión

## Desarrollo

## Ejemplo jurídico

## Práctica en editor

## PSET de la sesión

## Ejercicio o práctica guiada

## Ideas clave
```

No todos los capítulos deben copiar esta plantilla al pie de la letra, pero sí conservar una **arquitectura legible y consistente**.

### 7.3. Callouts de Quarto

Usar callouts de forma consistente y deliberada. El libro debe apoyarse en ellos para hacer más llamativo el texto y capturar mejor la atención del estudiante durante la lectura.

No convertir cada página en una feria de cajitas de colores, porque bastante castigo visual produce ya internet por sí solo. La regla correcta es: **muchos callouts útiles, no muchos callouts gratuitos**.

Tipos sugeridos:

- `note`: para aclaraciones importantes
- `tip`: para recomendaciones prácticas
- `warning`: para riesgos o errores frecuentes
- `important`: para ideas clave

Ejemplo:

```md
::: {.callout-note}
## Idea clave

El pensamiento computacional no reemplaza el razonamiento jurídico, pero ayuda a estructurarlo con mayor precisión.
:::
```

### Regla de uso

Salvo que exista una razón clara para no hacerlo, cada capítulo o presentación de módulo debería incluir varios callouts bien utilizados, distribuidos de manera que ordenen la lectura y resalten ideas importantes.

### 7.4. Código

Si se incluyen bloques de código:

- deben ser mínimos,
- estar explicados,
- usar comentarios cuando haga falta,
- evitar saltos bruscos de dificultad,
- vincularse con un uso jurídico o pedagógico.

### 7.5. Componente práctico obligatorio

Toda sesión de contenido debe incluir una sección práctica reconocible. Puede llamarse, por ejemplo:

- `## Práctica en clase`
- `## Práctica en editor`
- `## Taller guiado`
- `## Manos al código`

Esa sección debe dejar claro:

- qué archivo o artefacto se va a crear o modificar;
- con qué herramienta se trabajará;
- qué comando, estructura o bloque se va a probar;
- qué debería observar o lograr el estudiante al terminar.

### 7.6. Git y GitHub como infraestructura obligatoria de trabajo

Git y GitHub no son contenidos periféricos del curso. Son parte de su infraestructura pedagógica.

Por tanto, cuando sea razonable, los capítulos deben:

- referirse al repositorio o repositorios donde vive la práctica;
- asumir que el trabajo puede clonarse, modificarse, versionarse y entregarse mediante Git/GitHub;
- tratar commits, historial y sincronización como hábitos normales de trabajo;
- evitar plantear ejercicios desconectados del ecosistema real del curso.

### 7.7. PSET por sesión

Cada sesión debe contar con un **PSET** o encargo práctico equivalente, alojado preferentemente en un repositorio de GitHub.

El manual debe poder:

- introducir el propósito del PSET;
- explicar qué habilidades pone en juego;
- describir qué debe producir el estudiante;
- conectar el PSET con el capítulo correspondiente.

Si un repositorio de PSET ya existe, Codex debe alinearse con él. Si todavía no existe, debe dejar la estructura pensada para incorporarlo sin romper la secuencia didáctica.

### 7.8. Tablas

Usar tablas solo cuando ordenen información mejor que un párrafo.

### 7.9. Referencias bibliográficas

Cuando un capítulo cite bibliografía, debe hacerlo de manera compatible con `bibliografia.bib`. Si la referencia todavía no existe en el `.bib`, marcar claramente que falta incorporarla o agregarla de forma consistente.

### 7.10. Higiene de fuentes y citas

Codex no debe dejar en los `.qmd` rastros de trabajo intermedio o marcadores artificiales de citación.

Esto incluye, por ejemplo:

- referencias temporales de herramientas,
- identificadores internos de conversación,
- marcas como `turn0...`, `filecite`, `view0` o equivalentes,
- notas al editor que no deban aparecer en el libro final.

Si se usa una fuente externa, debe integrarse de manera limpia y compatible con Quarto y con la bibliografía del proyecto.

---

## 8. Qué debe hacer Codex antes de escribir cualquier archivo

Antes de generar o reemplazar contenido, seguir esta secuencia:

1. **Leer `_quarto.yml`** para entender el orden real del libro.
2. **Revisar los archivos existentes del mismo módulo** para no duplicar ideas ni romper el tono.
3. **Confirmar la función del archivo dentro del recorrido del estudiante**.
4. **Usar el sílabo como límite de alcance**.
5. **Escribir contenido listo para pegar o guardar**, no borradores vagos.
6. **Distinguir si el plan está describiendo el estado actual o el estado deseado**.
7. **Verificar que no queden rastros editoriales o marcas técnicas incorrectas**.
8. **Confirmar cuál es el componente práctico de esa sesión**.
9. **Identificar el repositorio de GitHub o el PSET asociado, si existe**.

### Regla de oro

Si un archivo ya existe, Codex debe decidir entre:

- **completarlo**,
- **reescribirlo mejor**,
- o **respetarlo y no tocarlo**.

Nunca debe sobreescribir sin revisar el contenido previo.

### Verificación mínima antes de cerrar un archivo

Antes de considerar terminado un capítulo o una evaluación, Codex debe revisar como mínimo:

- que el título sea coherente con la secuencia del módulo;
- que el contenido corresponda al lugar que ocupa en el recorrido del curso;
- que no repita innecesariamente otro capítulo;
- que los ejemplos estén conectados con el derecho;
- que cualquier cita, referencia o bloque de código esté limpio y entendible;
- que exista un componente práctico real y no decorativo;
- que la práctica pueda trabajarse razonablemente en editor;
- que haya conexión clara con Git/GitHub o, si todavía no existe, un espacio previsto para ella;
- que el PSET de la sesión esté descrito o preparado de forma coherente;
- que el archivo sea razonablemente renderizable en Quarto.

---

## 9. Mapa de contenidos que Codex debe tener en mente

**Importante:** este apartado describe principalmente el **estado deseado del libro**, no solo su estado actual. Debe leerse como hoja de ruta editorial para completar, corregir y alinear el manual.

### Parte adicional del libro: Tutoriales

Además de la secuencia principal del curso, el libro web debe incorporar una parte específica llamada **Tutoriales**.

Su función no es reemplazar la sesión de clase, sino ofrecer materiales de profundización y soporte para trabajo autónomo fuera del aula.

Los tutoriales deben servir para que el estudiante pueda revisar, repasar o resolver bloqueos técnicos sin interrumpir la lógica principal del manual.

### Función pedagógica de Tutoriales

La sección `Tutoriales` debe concentrar explicaciones más detalladas, paso a paso, sobre herramientas, instalaciones y procedimientos que conviene estudiar con más calma fuera de clase.

Ejemplos esperables:

- cómo instalar Python;
- cómo instalar Visual Studio Code;
- cómo crear una cuenta en GitHub;
- cómo instalar Git;
- cómo clonar un repositorio;
- cómo hacer commit y push;
- cómo trabajar con ramas;
- cómo usar GitHub Pages;
- fundamentos de desarrollo de software;
- control de versiones con Git y GitHub;
- licencias de software, open source y reutilización responsable;
- otros tutoriales técnicos que el curso vaya incorporando.

### Criterio editorial para Tutoriales

Los tutoriales deben:

- tener tono claro, paciente y muy secuencial;
- asumir menos conocimientos previos que los capítulos de sesión;
- incluir pasos concretos, capturas o ejemplos si hiciera falta;
- servir como material de consulta recurrente;
- evitar duplicar innecesariamente la explicación central de las sesiones.

### Mapa inicial de Tutoriales

La parte `Tutoriales` debe reservar espacio, al menos, para materiales como estos:

- instalación de Python y verificación del entorno;
- instalación y configuración básica de Visual Studio Code;
- instalación de Git;
- creación de cuenta en GitHub y configuración inicial;
- clonado de repositorios, commits, push y trabajo básico con ramas;
- explicación más detallada de GitHub como plataforma de colaboración;
- fundamentos introductorios del desarrollo de software;
- licencias de software, open source, software libre y reutilización responsable;
- publicación con GitHub Pages;
- otros tutoriales técnicos que el curso necesite incorporar más adelante.

### Relación entre sesiones y tutoriales

Las sesiones del curso no deben cargar con toda la explicación instrumental de herramientas que conviene estudiar fuera de clase.

Por tanto:

- las sesiones principales pueden asumir ciertos tutoriales como apoyo previo o paralelo;
- los tutoriales absorben el detalle operativo más extenso;
- el libro debe enlazar, cuando convenga, desde un capítulo de sesión hacia el tutorial correspondiente.

### Parte 0

#### `index.qmd`
Portada del libro. Debe ser breve, visual, institucional y motivadora.

#### `parte-0/profesores.qmd`
Presentación sobria y profesional de los docentes.

#### `parte-0/intro.qmd`
Introducción general al curso, su sentido, su relevancia y la lógica del manual.

### Módulo I. Pensamiento computacional para juristas

#### `parte-1-modulo-1/00-presentacion.qmd`
- Título: Módulo I: Pensamiento computacional para juristas
- Función:
    - presentar el módulo como puente entre razonamiento jurídico y lógica computacional,
    - explicar por qué importa antes de entrar a automatización, datos, web o IA,
    - anticipar el recorrido: binario, pseudocódigo y Python aplicado a problemas jurídicos,
    - advertir que el módulo se trabaja programando, versionando y resolviendo PSETs.
 - Estructura obligatoria:
    - `## ¿Por qué importa este módulo?`
    - `## Qué aprenderás`
    - `## Cómo se trabaja en este módulo`
    - `## Tabla de contenidos del módulo`
    - `## Qué debes poder hacer al terminar`
    - `## Cómo se conecta con el resto del curso`
 - Tabla obligatoria del módulo:
    - debe resumir sesiones, temas, herramientas, práctica y PSET.

#### `01-capitulo.qmd`
- Título: 1. Del bit al pseudocódigo
- Contenido:
    - Qué hace una computadora en términos simples.
    - Bit, byte, sistema binario y representación de información.
    - Representación básica de números y texto.
    - Diferencia entre hardware, software, lenguaje máquina, lenguajes de bajo y alto nivel.
    - Pseudocódigo como puente entre lenguaje humano, lógica formal y programación.
    - Ejemplos jurídicos sencillos de reglas y decisiones expresadas como instrucciones.
    - Práctica en editor: escribir pseudocódigo o instrucciones estructuradas en archivos de texto o Markdown.
    - Git/GitHub: clonar el repositorio base del módulo y registrar el primer cambio.
    - PSET: ejercicios de representación lógica y traducción de reglas jurídicas a pasos verificables.

#### `02-capitulo.qmd`
- Título: 2. Primeros pasos con Python
- Contenido:
    - Qué es Python y por qué puede ser útil para juristas.
    - Instalación o entorno mínimo de trabajo.
    - Ejecución de scripts sencillos.
    - Variables, tipos de datos, entradas y salidas.
    - Condicionales, bucles y funciones.
    - Manejo básico de listas, texto, fechas y archivos.
    - Ejercicios aplicados a tareas jurídicas simples.
    - Práctica en editor: abrir scripts, modificarlos y ejecutarlos desde el repositorio del curso.
    - Git/GitHub: trabajo normal de clonación, commit y sincronización.
    - PSET: ejercicios en Python vinculados con lógica jurídica básica, plazos, texto o clasificación simple.

#### `03-capitulo.qmd`
- Título: 3. Python para decisiones jurídicas y automatización básica
- Contenido:
    - Construcción de lógica jurídica más compleja con Python.
    - Encadenamiento de condiciones, validaciones y reglas.
    - Uso de funciones para encapsular criterios jurídicos repetibles.
    - Modelado básico de decisiones, elegibilidad, clasificación o revisión preliminar.
    - Casos simples de automatización: multas, requisitos, admisibilidad, cálculo de plazos o verificación de condiciones.
    - Práctica en editor: escribir y probar scripts con varias reglas jurídicas combinadas.
    - Git/GitHub: trabajo normal sobre repositorio del curso con commits verificables.
    - PSET: construir una solución en Python para resolver un problema jurídico con múltiples condiciones.

#### `04-capitulo.qmd`
- Título: 4. Python para datos, documentos y flujos jurídicos
- Contenido:
    - Trabajo con colecciones de datos jurídicos en Python.
    - Lectura, organización y transformación de texto, listas, diccionarios o archivos.
    - Extracción de información básica desde documentos o registros simples.
    - Introducción a automatización de documentos y generación de salidas estructuradas.
    - Preparación del puente hacia datos jurídicos, reportes y automatización del módulo siguiente.
    - Práctica en editor: procesar archivos o estructuras de datos vinculadas con expedientes, contratos, plazos o registros.
    - Git/GitHub: versionar scripts y resultados de práctica en repositorio.
    - PSET: resolver una tarea de procesamiento o automatización jurídica básica con Python.

### Módulo II. Automatización y datos jurídicos

#### `parte-2-modulo-2/00-presentacion.qmd`
- Título: Módulo II: Procesos y visualización de datos jurídicos
- Función:
    - explicar que no se puede automatizar ni medir bien un proceso que no se entiende,
    - conectar procesos, datos y reporting con práctica legal,
    - preparar el terreno para BPMN, tablas, visualización y automatización documental,
    - anticipar que el módulo se trabajará modelando, estructurando datos y resolviendo PSETs en repositorios.
 - Estructura obligatoria:
    - `## ¿Por qué importa este módulo?`
    - `## Qué aprenderás`
    - `## Cómo se trabaja en este módulo`
    - `## Tabla de contenidos del módulo`
    - `## Qué debes poder hacer al terminar`
    - `## Cómo se conecta con el resto del curso`
 - Tabla obligatoria del módulo:
    - debe resumir sesiones, temas, herramientas, práctica y PSET.

#### `05-capitulo.qmd`
- Título: 5. Entender el negocio  
- Contenido:
    - Procesos legales y administrativos como secuencias de actividades, decisiones y responsables.
    - Levantamiento básico de procesos: actores, entradas, salidas, cuellos de botella y puntos de control.
    - Introducción a BPMN como lenguaje para representar procesos.
    - Herramientas para diagramar procesos, con énfasis en Mermaid.
    - Aplicaciones jurídicas: admisión de casos, revisión documental, compliance, atención al ciudadano, contratación y trámite interno.
    - Ejercicio guiado de modelado de un proceso legal sencillo.
    - Práctica en editor: escribir y corregir diagramas Mermaid o artefactos equivalentes.
    - Git/GitHub: versionar diagramas y documentación del proceso.
    - PSET: modelar un flujo legal y justificar decisiones, actores y puntos de control.

#### `06-capitulo.qmd`
- Título: 6. Explicar y controlar los resultados
- Contenido:
    - Datos jurídicos y tablas
    - Diferencia entre dato, registro, campo, variable e indicador.
    - Limpieza y organización básica de información jurídica.
    - Lectura de tablas y primeras nociones de bases de datos y SQL en nivel introductorio.
    - Visualización de datos para explicar hallazgos, patrones y riesgos.
    - Reportes simples para seguimiento de procesos, expedientes o cumplimiento.
    - Primera aproximación a automatización documental o generación de reportes, según convenga a la secuencia final del curso.
    - Práctica en editor: manipular archivos de datos, consultas sencillas o scripts/reportes básicos.
    - Git/GitHub: entregar el PSET en repositorio con evidencia reproducible.
    - PSET: organizar, consultar o visualizar información jurídica con un objetivo claro.

### Módulo III. Web, nube y seguridad para el sector legal

#### `parte-3-modulo-3/00-presentacion.qmd`
- Título: Módulo III: Web, nube y seguridad para el sector legal
- Función:
    - presentar internet como infraestructura sobre la que operan servicios legales digitales,
    - conectar publicación web, alojamiento y seguridad con práctica profesional,
    - mostrar que entender la web también es entender exposición, riesgo y trazabilidad,
    - advertir que el módulo se trabaja construyendo y publicando artefactos reales.
 - Estructura obligatoria:
    - `## ¿Por qué importa este módulo?`
    - `## Qué aprenderás`
    - `## Cómo se trabaja en este módulo`
    - `## Tabla de contenidos del módulo`
    - `## Qué debes poder hacer al terminar`
    - `## Cómo se conecta con el resto del curso`
 - Tabla obligatoria del módulo:
    - debe resumir sesiones, temas, herramientas, práctica y PSET.

#### `07-capitulo.qmd`
- Título: 7. El Internet y la nube 
- Contenido:
    - Qué es internet y cómo circula la información en la web.
    - Diferencia entre web, navegador, servidor, dominio y hosting.
    - Estructura básica de una página web.
    - Introducción a HTML, CSS y JavaScript en lenguaje accesible.
    - Diferencia entre páginas estáticas y dinámicas.
    - Qué significa publicar un sitio y por qué GitHub Pages sirve como ejemplo pedagógico útil.
    - Aplicaciones para juristas: presencia profesional, difusión académica, legal design básico y publicación de información estructurada.
    - Práctica en editor: crear o editar una página simple en HTML/CSS/JS.
    - Git/GitHub: publicar o preparar publicación mediante repositorio y GitHub Pages.
    - PSET: construir una página funcional mínima vinculada con identidad profesional o contenido jurídico.

#### `08-capitulo.qmd`
- Título: 8. Ciberseguridad 
- Contenido:
    - Concepto básico de ciberseguridad y por qué importa en el sector legal.
    - Riesgos frecuentes: phishing, contraseñas débiles, malware, fuga de información y accesos indebidos.
    - Confidencialidad, integridad y disponibilidad en contexto jurídico.
    - Buenas prácticas mínimas para estudiantes y profesionales del derecho.
    - Gestión básica de incidentes y cultura de prevención.
    - Relación entre seguridad, protección de datos, deberes profesionales y confianza institucional.
    - Práctica en editor: revisión guiada de configuraciones, checklists, archivos o escenarios simulados.
    - Git/GitHub: documentación y entrega de hallazgos o medidas mínimas en repositorio.
    - PSET: análisis práctico de riesgos y propuesta básica de mitigación.

### Módulo IV. Inteligencia artificial aplicada al Derecho

#### `parte-4-modulo-4/00-presentacion.qmd`
- Título: Módulo IV. Inteligencia artificial aplicada al Derecho
- Contenido:
    - Presentación del módulo y advertencia sobre oportunidades y riesgos.
    - Explicación de que la IA debe evaluarse como herramienta y no como autoridad epistémica.
    - Conexión con ética, regulación, cumplimiento y diseño responsable.
    - Anticipo de prácticas con prompts, evaluación crítica, repositorios y PSETs.
 - Estructura obligatoria:
    - `## ¿Por qué importa este módulo?`
    - `## Qué aprenderás`
    - `## Cómo se trabaja en este módulo`
    - `## Tabla de contenidos del módulo`
    - `## Qué debes poder hacer al terminar`
    - `## Cómo se conecta con el resto del curso`
 - Tabla obligatoria del módulo:
    - debe resumir sesiones, temas, herramientas, práctica y PSET.

#### `09-capitulo.qmd`
- Título: 9. Fundamentos de inteligencia artificial
- Contenido:
    - Concepto, historia y tipos de IA. Fundamentos introductorios.
    - Diferencia entre automatización, IA, machine learning y modelos generativos.
    - LLM, IA agéntica y estado del arte en nivel introductorio.
    - Alucinaciones, límites, sesgos y necesidad de validación humana.
    - RAG explicado de manera accesible.
    - Casos de uso legales: búsqueda, redacción asistida, clasificación, revisión y análisis preliminar.
    - Práctica en editor: registro de prompts, pruebas controladas o pequeños scripts introductorios.
    - Git/GitHub: versionar experimentos, prompts o bitácoras de evaluación.
    - PSET: comparar respuestas, detectar errores y justificar límites de uso.

#### `10-capitulo.qmd`
- Título: 10. Evaluar, gobernar e integrar IA en contextos jurídicos
- Contenido:
    - Qué significa evaluar una herramienta de IA antes de adoptarla.
    - Criterios de calidad: utilidad, precisión, trazabilidad, explicabilidad y control humano.
    - Riesgos regulatorios, éticos y operativos.
    - Auditoría básica de prompts y revisión crítica de resultados.
    - Controles mínimos de cumplimiento para uso responsable en entornos jurídicos.
    - Integraciones introductorias con Python o flujos simples, si encaja con el nivel del curso.
    - Práctica en editor: construir una bitácora de evaluación o una integración introductoria reproducible.
    - Git/GitHub: entregar evidencia del proceso de prueba y control.
    - PSET: evaluar una herramienta o flujo de IA con criterios jurídicos y técnicos básicos.

#### `11-capitulo.qmd`
- Título: 11. Ejemplos de proyectos Legal Tech
- Contenido:
    - Mapeo Legal Tech Perú 2025 de la Universidad Científica del Sur
    - Tipologías de proyectos: automatización, acceso a justicia, analítica, cumplimiento, gestión documental, marketplaces o asistentes.
    - Criterios para distinguir entre idea llamativa y solución jurídicamente útil.
    - Casos, demos o referencias que ayuden a preparar la evaluación final y el demo day.
    - Cierre integrador del curso orientado a identificar problemas reales y proponer soluciones viables.
    - Práctica en editor: bosquejo o documentación inicial del proyecto en repositorio.
    - Git/GitHub: preparación del espacio de trabajo del proyecto final.
    - PSET: propuesta inicial o avance verificable del proyecto legaltech.

### Evaluaciones

Los archivos de evaluación no deben sonar burocráticos ni vagos. Deben explicar:

- qué se espera del estudiante,
- criterios de calidad,
- entregables,
- formato,
- errores frecuentes,
- conexión con el aprendizaje del curso.

Además, cuando corresponda, deben dejar explícito:

- si el trabajo es individual o grupal;
- qué evidencia concreta debe entregarse;
- cómo se conecta con el módulo inmediatamente anterior;
- qué distingue un trabajo suficiente de uno realmente sólido.

En la medida de lo posible, las evaluaciones también deben asumir:

- entrega o soporte en repositorios de GitHub;
- trazabilidad del trabajo mediante Git;
- productos prácticos, no solo descripciones abstractas;
- continuidad con los PSETs trabajados durante el curso.

---

## 10. Criterios de calidad para cada nuevo capítulo

Antes de dar por terminado un archivo, Codex debe revisar si cumple esto:

### Claridad
- ¿Una estudiante de Derecho sin base técnica puede seguir la explicación?

### Relevancia
- ¿Se entiende por qué este contenido importa para el derecho?

### Progresión
- ¿El capítulo va de lo simple a lo complejo?

### Utilidad
- ¿Incluye ejemplos, ejercicios o aplicaciones?

### Practicidad
- ¿La sesión obliga razonablemente a abrir un editor y producir algo concreto?

### Consistencia
- ¿Respeta el tono y estructura del resto del libro?

### Uniformidad de presentaciones de módulo
- ¿La presentación del módulo respeta la estructura común definida en el plan?
- ¿Incluye la tabla-resumen obligatoria del módulo?

### Compatibilidad técnica
- ¿Renderiza razonablemente bien en Quarto?

### Limpieza editorial
- ¿El archivo evita marcadores técnicos, citas rotas o artefactos de edición?

### Alineación con el plan
- ¿El contenido real ya se acerca al estado deseado descrito en la sección 9?

### Integración con infraestructura del curso
- ¿Se conecta bien con Git, GitHub y el PSET correspondiente?

---

## 11. Qué debe evitar Codex

### Evitar contenido genérico tipo relleno
No escribir páginas que parezcan hechas para cumplir con un trámite existencial del software. Cada sección debe aportar algo.

### Evitar exceso de jerga técnica
Si aparece un término como API, repositorio, variable, nube, cifrado, token, modelo, prompt o scraping, debe explicarse en lenguaje claro cuando sea necesario.

### Evitar ejemplos desconectados del derecho
Nada de ejemplos sobre vender limonada, zoológicos o cohetes espaciales, salvo que tengan un propósito pedagógico muy claro. Priorizar expedientes, contratos, procedimientos, evidencia, datos públicos, firmas digitales, atención al ciudadano, fiscalización y gestión legal.

### Evitar tono artificialmente triunfalista
El manual debe motivar, sí, pero no sonar como propaganda tecnológica.

### Evitar duplicación entre capítulos
Cada archivo debe tener función propia.

### Evitar romper rutas internas
No cambiar nombres de archivos ni enlaces sin revisar `_quarto.yml`.

---

## 12. Instrucciones específicas para escritura pedagógica

### Para introducciones de módulo
Deben incluir normalmente:

- una explicación breve del eje del módulo,
- por qué importa para un jurista hoy,
- qué habilidades se desarrollarán,
- cómo conecta con el módulo anterior o siguiente,
- uno o más callouts pedagógicos.

Pero además, en este proyecto, las presentaciones de módulo deben ser **uniformes**. Eso significa que todas deben contener siempre las mismas secciones base:

- `## ¿Por qué importa este módulo?`
- `## Qué aprenderás`
- `## Cómo se trabaja en este módulo`
- `## Tabla de contenidos del módulo`
- `## Qué debes poder hacer al terminar`
- `## Cómo se conecta con el resto del curso`

### Tabla de contenidos del módulo

Cada presentación de módulo debe incluir una tabla que resuma al menos:

- número o nombre de la sesión;
- tema central;
- herramienta o tecnología principal;
- práctica principal;
- PSET o producto esperado.

### Para sesiones de contenido
Deben incluir normalmente:

- apertura motivadora breve,
- conceptos centrales,
- ejemplos aplicados al derecho,
- práctica explícita en editor,
- referencia al repositorio o espacio de trabajo correspondiente,
- conexión con el PSET de la sesión,
- ejercicios, preguntas o prácticas,
- cierre con ideas clave.

### Para evaluaciones
Deben incluir normalmente:

- propósito de la evaluación,
- entregable,
- modalidad,
- criterios de evaluación,
- recomendaciones prácticas,
- errores frecuentes.

---

## 13. Instrucciones específicas sobre Quarto y estilo visual

### Sobre el diseño
Este proyecto ya tiene una base visual en `styles.css`. Codex no debe insertar CSS dentro de los `.qmd`, salvo necesidad excepcional claramente justificada.

### Sobre responsividad
Cuando se escriba contenido con bloques HTML o layouts, debe respetarse la lógica responsive ya usada en la portada y la página de profesores.

### Sobre navegación
Las partes del libro deben seguir siendo navegables desde `_quarto.yml`. Si se crea un archivo nuevo, actualizar `_quarto.yml` solo cuando realmente corresponda.

---

## 14. Método recomendado de trabajo para Codex

Cuando se le pida trabajar sobre el libro, seguir esta rutina:

### Caso A. Crear un archivo nuevo
1. Revisar la carpeta correspondiente.
2. Revisar `_quarto.yml`.
3. Redactar el `.qmd` completo.
4. Verificar títulos, subtítulos, callouts, coherencia y rutas.

### Caso B. Mejorar un archivo existente
1. Leer el archivo completo.
2. Identificar si falta profundidad, estructura o tono.
3. Reescribir respetando la función del archivo.
4. Mantener compatibilidad con el resto del libro.

### Caso C. Proponer estructura de contenido
1. Basarse en el sílabo.
2. No inventar módulos paralelos.
3. Proponer secciones realistas para estudiantes de Derecho.

---

## 15. Plantilla base sugerida para capítulos de sesión

```md
# Sesión X. [Título]

## ¿Por qué importa este tema?

Texto breve que conecte el tema con la práctica jurídica.

::: {.callout-important}
## Objetivo de la sesión

Al finalizar esta sesión, deberías ser capaz de...
:::

## 1. Concepto central

## 2. Cómo funciona

## 3. Ejemplo aplicado al derecho

## 4. Ejercicio o práctica guiada

## 5. Errores frecuentes o riesgos

::: {.callout-tip}
## Para recordar

Idea práctica de cierre.
:::
```

No es una camisa de fuerza, pero sí una buena vacuna contra el caos.

---

## 16. Plantilla base sugerida para presentaciones de módulo

```md
# [Número romano]. [Nombre del módulo]

En este módulo aprenderás...

## ¿Por qué este módulo es importante?

## Objetivos de aprendizaje

- Objetivo 1
- Objetivo 2
- Objetivo 3

## Qué veremos

## Cómo se conecta con el ejercicio del derecho

::: {.callout-note}
## Idea clave

Mensaje de orientación para el estudiante.
:::
```

---

## 17. Plantilla base sugerida para evaluaciones

```md
# [Nombre de la evaluación]

## ¿En qué consiste?

## ¿Qué debes entregar?

## Criterios de evaluación

## Recomendaciones para hacer un buen trabajo

::: {.callout-warning}
## Errores frecuentes

Lista breve de errores que conviene evitar.
:::
```

---

## 18. Prioridades inmediatas de escritura

Dado el estado actual del repositorio, la prioridad de Codex debe ser:

1. completar las **presentaciones de módulos**,
2. desarrollar los **capítulos de sesiones**,
3. robustecer las **páginas de evaluación**,
4. verificar consistencia entre contenidos, sílabo y navegación.

---

## 19. Regla final de comportamiento para Codex

Cada vez que Codex escriba o modifique contenido para este libro, debe comportarse como un **coautor editorial técnico-pedagógico**.

Eso significa:

- respetar el sílabo,
- respetar el repositorio,
- escribir con criterio docente,
- pensar en estudiantes reales,
- producir archivos utilizables,
- y evitar la improvisación elegante pero inútil, que es una de las bellas plagas de la automatización contemporánea.
