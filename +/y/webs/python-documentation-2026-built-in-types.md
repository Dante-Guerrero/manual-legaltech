# Built-in Types

- Tipo: extracto web
- Sitio: Python Documentation
- Clave bibliografica: `pythonbuiltins2026`
- URL: `https://docs.python.org/3/library/stdtypes.html`
- Fecha de consulta en bibliografia: `2026-05-24`
- Capitulo(s) donde podria citarse: 1, 2
- Temas: python, tipos, str, bytes, bool

## Resumen util

La documentacion oficial de tipos incorporados de Python permite vincular el primer modulo con una distincion muy formativa: texto, binario, numeros y booleanos no son "cosas parecidas", sino categorias distintas con operaciones distintas. Eso ayuda a sostener el paso desde la representacion computacional basica hacia los primeros programas.

Resulta especialmente util que la pagina separe `str` como secuencia de texto y `bytes` como secuencia binaria, y que tambien documente reglas basicas de verdad, secuencias y operaciones comunes. Para estudiantes de Derecho, esto refuerza que programar exige clasificar con precision que tipo de informacion se esta manipulando.

## Datos puntuales aprovechables

- Python distingue explicitamente entre secuencias de texto (`str`) y secuencias binarias (`bytes`, `bytearray`, `memoryview`).
- Casi todos los objetos pueden convertirse a cadena con `str()` o mostrarse con `print()`.
- Las condiciones en Python dependen de reglas de truth value testing.
- Las secuencias comparten operaciones comunes como pertenencia, longitud, indexacion y slicing.

## Posibles usos en el manual

- apoyar la explicacion de variables y tipos de datos;
- reforzar por que `print()`, booleanos y secuencias importan desde el inicio;
- conectar la idea de bits y bytes con tipos concretos que el estudiante manipula en Python.
