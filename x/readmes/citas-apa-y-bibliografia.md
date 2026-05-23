# Citas en APA 7 y uso de `bibliografia.bib`

En este libro es obligatorio citar las fuentes siguiendo el estilo **APA 7**. Esto aplica tanto a citas narrativas como a citas parentéticas dentro de los archivos `.qmd`.

Toda fuente que se cite en el texto debe registrarse también en `bibliografia.bib`. No basta con mencionar autores o incluir enlaces sueltos: si una obra sustenta una afirmación, debe tener su entrada bibliográfica completa en ese archivo.

Reglas de trabajo:

1. Cada vez que se agregue una cita en un capítulo, se debe verificar que la referencia correspondiente exista en `bibliografia.bib`.
2. Si la referencia no existe, debe añadirse antes de cerrar la edición del capítulo.
3. No deben quedar afirmaciones académicas o técnicas relevantes sin respaldo cuando dependen de una fuente externa.
4. Debe mantenerse consistencia en nombres de autores, año, título, revista, volumen, número, páginas, DOI o URL, según corresponda.

En Quarto, la práctica recomendada es citar con claves bibliográficas como `[@clave]` o `@clave`, y dejar que el libro construya automáticamente la sección de referencias a partir de `bibliografia.bib`.

Esta regla es editorial y metodológica: ayuda a mantener trazabilidad, rigor académico y uniformidad en todo el manual.
