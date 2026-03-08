# Manual Legal Tech

Libro web desarrollado con Quarto para el curso **Legal Tech** de la Facultad de Derecho y Economía de la **Universidad Científica del Sur**.

El repositorio organiza el contenido del curso como un manual digital navegable, con portada, presentación de docentes, introducción, módulos de aprendizaje, evaluaciones y referencias.

## Objetivo

Construir un manual web que sirva como soporte del curso, con una estructura clara, navegación por capítulos y una presentación visual consistente para estudiantes y docentes.

## Estructura del proyecto

- `_quarto.yml`: configuración principal del libro y orden de los capítulos.
- `index.qmd`: portada e ingreso al manual.
- `parte-0/`: páginas iniciales, incluyendo profesores e introducción.
- `parte-1-modulo-1/` a `parte-4-modulo-4/`: módulos de aprendizaje.
- `evaluaciones/`: evaluaciones y exámenes.
- `referencias.qmd`: bibliografía y materiales de referencia.
- `styles.css`: estilos personalizados del libro.
- `images/`: imágenes usadas en portada y perfiles.
- `_book/`: salida renderizada generada por Quarto.

## Requisitos

- [Quarto](https://quarto.org/) instalado localmente.

## Uso

Renderizar el libro:

```bash
quarto render
```

Levantar una vista previa local:

```bash
quarto preview
```

La salida HTML se genera en la carpeta `_book/`.

## Diseño actual

El libro usa:

- formato `book` de Quarto
- tema HTML base `cosmo`
- estilos personalizados en `styles.css`

## Convención de contenido

Cada capítulo se escribe en archivos `.qmd` y el orden de lectura se controla desde `_quarto.yml`. Esto permite mantener el contenido modular y reorganizar el manual sin alterar la navegación final del sitio.

## Estado del repositorio

El proyecto ya cuenta con una estructura funcional de libro web y una primera capa de diseño. La siguiente etapa natural es seguir refinando el contenido académico y fortalecer la identidad visual del manual.
