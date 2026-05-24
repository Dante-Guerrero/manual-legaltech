# Instrucciones para notas atómicas en `+/z`

La carpeta `+/z` sigue una lógica inspirada en **zettelkasten** para apoyar la escritura del manual.

## Qué es una nota atómica aquí

Cada archivo Markdown de `+/z` debe contener:

- **una sola idea principal**;
- una referencia clara al documento del que fue extraída;
- indicación de en qué capítulos del manual podría servir;
- una formulación breve de por qué esa idea importa;
- si es posible, una frase o paráfrasis utilizable después en el libro.

La unidad no es “un documento”, sino **una idea reutilizable**.

## Para qué sirve

Estas notas permiten:

- no volver a leer todos los documentos cada vez que se quiera insertar citas;
- detectar más de una posible cita por fuente;
- construir argumentos del manual a partir de ideas pequeñas y combinables;
- mantener trazabilidad entre el libro y los materiales de `+/y/<tipo>/markdown` o `+/y/webs`.

## Formato sugerido de cada nota

```md
# Título de la idea

- ID: 202605240001
- Fuente: autor-año-titulo-del-documento
- Archivo fuente: ruta al `.md` en `+/y/<tipo>/markdown`
- Archivo fuente: ruta al `.md` en `+/y/<tipo>/markdown` o en `+/y/webs`
- Capítulos potenciales: 2, 3, 4
- Temas: palabra-clave-1, palabra-clave-2

## Idea

Una sola idea central, redactada de forma breve y clara.

## Utilidad para el manual

Explicación de por qué esta idea podría incorporarse al libro.

## Posibles inserciones

- sección o tipo de pasaje donde podría citarse;
- otra sección o pasaje posible.

## Paráfrasis posible

Una o dos frases que luego puedan adaptarse al capítulo.
```

## Regla práctica

Si de un mismo documento salen tres ideas distintas, deben crearse **tres notas distintas**.

## Flujo recomendado

1. Leer o revisar el documento convertido en `+/y/<tipo>/markdown` o el extracto de `+/y/webs`.
2. Identificar una idea realmente utilizable para el manual.
3. Crear una nota nueva en `+/z` con esa sola idea.
4. Vincularla al documento de origen.
5. Indicar en qué capítulos podría servir.
6. Si después se actualiza un documento de propuestas de citas, usar primero las notas de `+/z` en lugar de reempezar desde cero.

## Convención de nombres

Los archivos de `+/z` usan:

`ID-titulo-breve.md`

Ejemplo:

`202605240001-codigo-como-alfabetizacion-juridica.md`

## Regla de mantenimiento

Cuando se agreguen nuevos documentos y se conviertan a Markdown:

- revisar primero si ya existe una nota atómica equivalente;
- si no existe, crear una nueva;
- si el mismo documento permite varias ideas, crear varias notas;
- evitar notas demasiado grandes o que mezclen argumentos heterogéneos.
