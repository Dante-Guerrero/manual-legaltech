# Ejercicios de HTML, CSS y JavaScript

Colección local de ejercicios introductorios para aprender desarrollo web desde cero con ejemplos pequeños, comentados y ordenados por niveles.

## Proposito

Este material sirve como apoyo para dar los primeros pasos en `HTML`, `CSS` y `JavaScript`. Su objetivo es que una persona principiante pueda avanzar de forma gradual:

- primero entendiendo la estructura de una pagina,
- luego aplicando estilos,
- despues agregando logica con JavaScript,
- y finalmente manipulando el DOM y construyendo mini proyectos.

No busca cubrir todo frontend, sino ofrecer una base clara, practica y facil de explorar en clase o de manera autodidacta.

Dentro de este repositorio del manual, además, cumple una segunda función: sirve como fuente de referencia para [parte-3-modulo-3/07-capitulo.qmd](/Users/dante/github/manual-legaltech/parte-3-modulo-3/07-capitulo.qmd) y para la generación automática de capturas usadas en [07-capitulo-docx.qmd](/Users/dante/github/manual-legaltech/parte-3-modulo-3/07-capitulo-docx.qmd).

## Que contiene

El repositorio esta organizado como una ruta de aprendizaje progresiva:

- `00-html/`: ejemplos basicos de estructura, texto, listas, enlaces, tablas y formularios.
- `01-css/`: estilos en linea, colores, fondos, espaciado, tipografia y `flexbox`.
- `02-javascript/`: fundamentos del lenguaje como variables, condicionales, bucles, funciones y eventos.
- `03-dom-formularios/`: lectura de inputs, validacion y cambios visuales desde JavaScript.
- `04-mini-proyectos/`: ejercicios integrados con `HTML`, `CSS` y `JavaScript`.
- `05-ejercicios-practicos/`: retos guiados para practicar de forma autonoma.

## Tipo de material

La mayor parte del contenido esta pensada para aprender mirando y modificando archivos reales:

- archivos `.html` que se pueden abrir directamente en el navegador,
- ejemplos pequenos y enfocados en un solo concepto,
- comentarios dentro del codigo para orientar la lectura,
- mini proyectos sencillos como una tarjeta, una calculadora y una lista de tareas,
- ejercicios en formato `.md` para resolver por cuenta propia.

## A quien va dirigido

Este repositorio esta pensado para personas que:

- nunca han creado una pagina web,
- estan empezando a programar,
- necesitan material de practica para clases introductorias,
- quieren una secuencia simple antes de pasar a herramientas mas avanzadas.

## Como usarlo aqui

1. Abre la carpeta en tu editor, por ejemplo `VS Code`.
2. Entra a cualquier archivo `.html`.
3. Abre ese archivo en tu navegador o usa una extension como Live Server.
4. Modifica textos, colores o comportamiento y recarga la pagina para observar los cambios.

Si lo que quieres es regenerar las capturas que usa la versión Word del manual, el comando relevante se ejecuta en la raíz del proyecto:

```bash
npm run build:ch7-docx-assets
```

## Orden recomendado

Para aprovechar mejor el material, conviene avanzar en este orden:

1. `00-html`
2. `01-css`
3. `02-javascript`
4. `03-dom-formularios`
5. `04-mini-proyectos`
6. `05-ejercicios-practicos`

## Ejemplo de inicio

Si quieres comenzar por el archivo mas simple del repositorio, abre:

```text
00-html/00-hola-mundo.html
```

Desde ahi puedes seguir el resto de archivos en orden numerico.

## Idea central del repositorio

El valor de este material no esta solo en "leer codigo", sino en experimentar con cambios pequenos y frecuentes. Cada carpeta representa un paso en la construccion de una pagina web interactiva, y juntas forman una introduccion practica al desarrollo web que ademas alimenta el capitulo 7 del manual.
