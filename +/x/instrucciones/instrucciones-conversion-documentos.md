# Instrucciones para convertir documentos

Este repositorio ya tiene un flujo general para convertir documentos fuente dentro de `+/y`.

## Estructura actual de `+/y`

La carpeta `+/y` distingue:

- `+/y/+ entrada`: documentos todavía no clasificados.
- `+/y/papers/pdf` y `+/y/papers/markdown`
- `+/y/normas/pdf` y `+/y/normas/markdown`
- `+/y/libros-manuales/pdf` y `+/y/libros-manuales/markdown`
- `+/y/jurisprudencia/pdf` y `+/y/jurisprudencia/markdown`

## Regla previa: clasificar antes de convertir

Ningún documento debería convertirse directamente desde `+/y/+ entrada`.

Antes de ejecutar un script:

1. revisar qué tipo de documento es;
2. moverlo a la categoría correcta;
3. dejarlo en la subcarpeta `pdf` correspondiente.

## Categorías válidas

El script genérico acepta estas categorías:

- `papers`
- `normas`
- `libros-manuales`
- `jurisprudencia`

## Regla de nombres

Antes de convertir un PDF nuevo, su nombre debe seguir este formato:

`autor-año-titulo-del-documento.pdf`

Notas:

- usa minúsculas;
- usa guiones en lugar de espacios;
- elimina tildes y otros signos diacríticos;
- conserva solo caracteres ASCII;
- si el año no puede determinarse con seguridad, usa `sf`.

## Conversión de solo archivos nuevos

La forma general es esta:

```bash
./+/x/scripts/convert_documents.sh <categoria> --new
```

Ejemplos:

```bash
./+/x/scripts/convert_documents.sh papers --new
./+/x/scripts/convert_documents.sh libros-manuales --new
./+/x/scripts/convert_documents.sh normas --new
./+/x/scripts/convert_documents.sh jurisprudencia --new
```

Ese comando:

- revisa `+/y/<categoria>/pdf`;
- compara los PDF presentes con la lista de convertidos de esa categoría;
- convierte únicamente los PDF que todavía no estén listados;
- crea un `.md` por cada PDF nuevo en `+/y/<categoria>/markdown`;
- actualiza la lista correspondiente dentro de `+/x/instrucciones`.

## Reconstrucción completa

Si hace falta borrar las conversiones actuales de una categoría y reconstruirlas desde cero:

```bash
./+/x/scripts/convert_documents.sh <categoria> --all
```

Ese comando:

- borra el contenido actual de `+/y/<categoria>/markdown`;
- reconvierte todos los PDF de `+/y/<categoria>/pdf`;
- reconstruye la lista de convertidos de esa categoría.

## Wrapper histórico para papers

Para no romper el flujo anterior, sigue existiendo este atajo:

```bash
./+/x/scripts/convert_papers.sh --new
```

Ese wrapper equivale a:

```bash
./+/x/scripts/convert_documents.sh papers --new
```

## Listas de control por categoría

Las listas de convertidos viven en:

- [convertidos-papers.md](/Users/dante/github/manual-legaltech/+/x/instrucciones/convertidos-papers.md)
- [convertidos-libros-manuales.md](/Users/dante/github/manual-legaltech/+/x/instrucciones/convertidos-libros-manuales.md)
- [convertidos-normas.md](/Users/dante/github/manual-legaltech/+/x/instrucciones/convertidos-normas.md)
- [convertidos-jurisprudencia.md](/Users/dante/github/manual-legaltech/+/x/instrucciones/convertidos-jurisprudencia.md)

## Procedimiento recomendado para nuevos documentos

1. Copiar el archivo nuevo dentro de `+/y/+ entrada`.
2. Clasificarlo en `papers`, `normas`, `libros-manuales` o `jurisprudencia`.
3. Moverlo a `+/y/<categoria>/pdf`.
4. Renombrarlo al formato `autor-año-titulo-del-documento.pdf`.
5. Ejecutar `./+/x/scripts/convert_documents.sh <categoria> --new`.
6. Verificar que exista un `.md` correspondiente en `+/y/<categoria>/markdown`.
7. Confirmar que el documento nuevo haya quedado incorporado en la lista de convertidos de esa categoría.

Nota:
como la ruta comienza con `+`, conviene invocar los scripts desde la raíz del repositorio con el prefijo `./`.

## Observación práctica

Algunos documentos traen nombres originales truncados o no muestran con claridad autor y año en el nombre del archivo. En esos casos conviene revisar el propio documento antes de renombrarlo para evitar que el formato quede incompleto o incorrecto.
