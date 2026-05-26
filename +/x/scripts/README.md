# Scripts y materiales auxiliares

Esta carpeta agrupa dos tipos de recursos:

- scripts utilitarios para conversión o preparación de materiales;
- colecciones de ejercicios usadas como insumo pedagógico para el manual.

## Scripts disponibles

- [convert_documents.sh](/Users/dante/github/manual-legaltech/+/x/scripts/convert_documents.sh): wrapper principal para convertir PDFs de `+/y` a Markdown por categoría.
- [convert_papers.sh](/Users/dante/github/manual-legaltech/+/x/scripts/convert_papers.sh): wrapper histórico orientado solo a `papers`.
- [pdf_to_markdown.swift](/Users/dante/github/manual-legaltech/+/x/scripts/pdf_to_markdown.swift): convertidor base usado por los wrappers.

## Colecciones de ejercicios

- [ejercicios de Python](/Users/dante/github/manual-legaltech/+/x/scripts/ejercicios%20de%20Python): progresión de ejemplos y prácticas para los módulos introductorios de Python.
- [ejercicios de html-css-js](/Users/dante/github/manual-legaltech/+/x/scripts/ejercicios%20de%20html-css-js): material de referencia para el capítulo 7 y para la generación de capturas usadas en Word.

## Relación con el libro

El libro no renderiza esta carpeta directamente, pero sí depende de ella en varios puntos:

- los scripts de conversión alimentan `+/y` y, de forma indirecta, `+/z` y las citas del manual;
- los ejercicios de `html-css-js` sirven como fuente para las capturas de [07-capitulo-docx.qmd](/Users/dante/github/manual-legaltech/parte-3-modulo-3/07-capitulo-docx.qmd);
- los diagramas y assets especiales para Word se generan desde [scripts](/Users/dante/github/manual-legaltech/scripts), no desde esta carpeta, pero usan este material como referencia pedagógica.
