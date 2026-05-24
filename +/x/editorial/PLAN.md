# PLAN.md

## Propósito

Este documento concentra los acuerdos editoriales y pedagógicos vigentes del repositorio. Su función es permitir que el trabajo continúe con una misma dirección, sin depender de notas dispersas o instrucciones internas dentro de los capítulos.

## Sentido del libro

Este repositorio contiene un libro web desarrollado con Quarto para el curso **Legal Tech** de la Facultad de Derecho y Economía de la Universidad Científica del Sur.

El libro debe leerse como un manual universitario práctico para estudiantes de Derecho. Su propósito no es presentar la tecnología como una curiosidad externa al mundo jurídico, sino ayudar a comprender cómo los datos, la automatización, la web, la nube, la ciberseguridad y la inteligencia artificial ya forman parte del entorno profesional legal.

El horizonte formativo del manual es claro: un jurista no necesita convertirse en ingeniero, pero sí debe entender la lógica computacional, los procesos, los datos y la infraestructura digital con suficiente profundidad para analizar riesgos, reconocer oportunidades, formular mejores preguntas y proponer soluciones responsables.

## Público y enfoque pedagógico

El público principal son estudiantes de pregrado de Derecho. El libro debe asumir que muchas personas lectoras:

- no tienen experiencia previa en programación;
- pueden no estar familiarizadas con la terminal, Git o GitHub;
- necesitan explicaciones progresivas, explícitas y sin jerga innecesaria;
- aprenden mejor cuando cada concepto técnico se conecta con problemas jurídicos concretos.

La regla metodológica central es **aprender haciendo**. Cada sesión debe conducir al estudiante a producir algo verificable: pseudocódigo, scripts, diagramas, páginas, consultas, bitácoras de evaluación u otros artefactos semejantes. La lectura importa, pero el aprendizaje se consolida mediante práctica.

## Arquitectura general del libro

El libro se organiza alrededor de cuatro módulos:

1. **Pensamiento computacional para juristas**: representación de información, pseudocódigo, lógica de instrucciones y primeros pasos con Python.
2. **Automatización y datos jurídicos**: procesos, diagramas, tablas, indicadores, reportes y automatización documental.
3. **Web, nube y seguridad para el sector legal**: internet, páginas web, publicación, infraestructura digital y ciberseguridad.
4. **Inteligencia artificial aplicada al Derecho**: fundamentos de IA, modelos generativos, límites, sesgos, gobernanza y uso responsable.

Además de los capítulos principales, el libro puede incluir tutoriales instrumentales de apoyo cuando sean útiles para destrabar el trabajo técnico del estudiante.

## Principios editoriales obligatorios

### 1. El manual debe ser autocontenido

Los capítulos deben poder leerse como contenido formativo completo. No deben depender de referencias visibles a carpetas auxiliares, notas de proceso o instrucciones internas del repositorio.

No deben aparecer dentro del texto visible de los capítulos referencias a:

- carpetas auxiliares de trabajo;
- notas editoriales internas;
- recordatorios de producción;
- instrucciones dirigidas a quien edita y no a quien estudia.

### 2. No incluir instrucciones editoriales dentro de los capítulos

No deben quedar en el cuerpo del manual frases como:

- recordatorios para citar en APA 7;
- indicaciones para añadir fuentes a `bibliografia.bib`;
- advertencias para futuras personas editoras;
- notas sobre metodología interna de redacción o revisión.

Regla práctica:

1. Si una frase está dirigida a quien edita y no al estudiante, no debe aparecer en el capítulo.
2. Si una instrucción sirve para mantener consistencia editorial, debe vivir en documentación de apoyo como este `PLAN.md`, ahora ubicado en `+/x/instrucciones/`.
3. El texto del capítulo debe conservar foco pedagógico, claridad narrativa y continuidad de lectura pública.

### 3. Explicación didáctica, progresiva y amable

No basta con mostrar código o enumerar conceptos. Cada explicación debe ayudar a entender:

- qué hace una herramienta o instrucción;
- por qué se usa;
- qué se observa al ejecutarla;
- cómo se conecta con un problema jurídico o una práctica profesional relevante.

La prosa debe sentirse humana, clara y paciente. El manual no debe sonar como documentación interna, colección de scripts ni apunte improvisado.

### 4. Estructura natural, no rígida

Los capítulos pueden usar secciones, subtítulos, ejercicios y apoyos visuales, pero sin volverse mecánicos. Se favorecen:

- títulos expresivos y memorables;
- introducciones que den contexto;
- explicaciones paso a paso integradas en la prosa;
- cierres con ideas clave y reflexión.

### 5. El español debe quedar cuidado

Todo el texto del libro debe mantener ortografía completa en español. Eso incluye:

- tildes correctas;
- uso adecuado de `ñ`;
- signos de apertura cuando correspondan;
- puntuación clara y consistente;
- revisión final antes de considerar terminado un archivo.

No deben quedar restos de borradores sin acentos ni redacción apresurada.

### 6. Las fuentes deben citarse en APA 7

Toda fuente citada en el texto debe registrarse en `bibliografia.bib`. No deben quedar afirmaciones sustantivas basadas en fuentes externas sin respaldo bibliográfico.

Reglas de trabajo:

1. Cada vez que se agregue una cita en un capítulo, se debe verificar que la referencia exista en `bibliografia.bib`.
2. Si no existe, debe añadirse antes de cerrar la edición.
3. Debe mantenerse consistencia en autores, año, título, revista, DOI o URL, según corresponda.

La configuración vigente del libro concentra la bibliografía al final, en `referencias.qmd`, mediante el uso de `bibliography: bibliografia.bib`, `suppress-bibliography: true` y un bloque `::: {#refs}`.

## Estado actual del capítulo 2

El archivo `parte-1-modulo-1/02-capitulo.qmd` ya fue reestructurado de forma importante. Debe entenderse como un capítulo pedagógico, autocontenido y orientado a estudiantes de Derecho que recién comienzan con Python.

Actualmente, el capítulo:

- abre con una explicación de qué es Python y por qué importa para juristas;
- incluye una historia breve de Python con citas académicas y oficiales;
- integra una línea de tiempo dentro de esa explicación histórica;
- presenta un apartado de "Qué aprenderás en esta sesión";
- desarrolla ejercicios prácticos progresivos explicados paso a paso;
- cierra con "Ideas clave" y "Para pensar y reflexionar".

Los ejercicios ya incorporan, dentro de una sola secuencia pedagógica, temas como:

- `print()` y salida en pantalla;
- variables y tipos de datos;
- `input()` y entrada del usuario;
- conversión de tipos;
- operadores y comparaciones;
- condicionales;
- bucles `for` y `while`;
- funciones;
- listas, `len()`, `zip()` y `sorted()`;
- operaciones básicas de texto como `strip()`, `lower()`, `upper()`, `split()`, `replace()`, `startswith()` y `endswith()`.

## Relación entre capítulos 2 y 3

El capítulo 2 debe concentrarse en fundamentos de Python. Los ejemplos jurídicos más ricos o más claramente aplicados deben desplazarse hacia `parte-1-modulo-1/03-capitulo.qmd`, donde empieza a cobrar más sentido combinar fundamentos técnicos con lógica jurídica y automatización básica.

Consecuencia editorial:

- el capítulo 2 no debe sobrecargarse con casos jurídicos complejos;
- el capítulo 3 debe continuar la progresión y aprovechar las bases ya construidas;
- cualquier revisión futura debe cuidar la continuidad entre ambos capítulos.

## Regla de continuidad para próximas ediciones

El capítulo 2 ya pasó por una reescritura profunda. Por tanto, futuras mejoras deberían ser **incrementales**, salvo que exista una razón fuerte para replantearlo.

Toda edición nueva debe preservar:

1. el carácter autocontenido del manual;
2. la pedagogía progresiva para lectores no técnicos;
3. la consistencia de citas y bibliografía;
4. la calidad ortográfica del español;
5. una voz editorial clara, hospitalaria y seria.

## Siguiente línea de trabajo recomendada

La continuación más razonable del proyecto es revisar la secuencia inmediata del módulo 1 para asegurar continuidad de tono, dificultad y propósito pedagógico.

En particular, conviene:

1. verificar que `parte-1-modulo-1/03-capitulo.qmd` continúe naturalmente lo logrado en el capítulo 2;
2. pulir otros capítulos del módulo 1 para que compartan la misma voz pedagógica;
3. mantener el repositorio limpio de notas auxiliares que ya hayan sido absorbidas por este plan.
