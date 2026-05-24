# Instrucciones para convertir nuevos papers

Este repositorio ya tiene un flujo definido para los PDF de `+/y/papers`.

## Estructura actual

- Los PDF originales viven en `+/y/papers`.
- Sus conversiones a Markdown viven en `+/y/papers_md`.
- La lista de PDF ya convertidos vive en [papers-convertidos.md](/Users/dante/github/manual-legaltech/+/x/instrucciones/papers-convertidos.md).
- El extractor de texto vive en [pdf_to_markdown.swift](/Users/dante/github/manual-legaltech/+/x/scripts/pdf_to_markdown.swift).
- El script de conversión por lotes vive en [convert_papers.sh](/Users/dante/github/manual-legaltech/+/x/scripts/convert_papers.sh).

## Regla de nombres

Antes de convertir un PDF nuevo, su nombre en `+/y/papers` debe seguir este formato:

`autor-año-titulo-del-paper.pdf`

Notas:

- usa minúsculas;
- usa guiones en lugar de espacios;
- elimina tildes y otros signos diacríticos;
- conserva solo caracteres ASCII;
- si el año no puede determinarse con seguridad, usa `sf`.

## Conversión de solo archivos nuevos

Cuando se agreguen nuevos PDF y los ya existentes no deban tocarse:

```bash
./+/x/scripts/convert_papers.sh --new
```

Ese comando:

- revisa `+/y/papers`;
- compara los PDF presentes con la lista de `+/x/instrucciones/papers-convertidos.md`;
- convierte únicamente los PDF que todavía no estén listados;
- crea un `.md` por cada PDF nuevo en `+/y/papers_md`;
- actualiza la lista de convertidos.

## Reconstrucción completa

Si alguna vez hace falta borrar las conversiones actuales y reconstruirlas desde cero:

```bash
./+/x/scripts/convert_papers.sh --all
```

Ese comando:

- borra el contenido actual de `+/y/papers_md`;
- reconvierte todos los PDF de `+/y/papers`;
- reconstruye por completo `+/x/instrucciones/papers-convertidos.md`.

## Procedimiento recomendado para nuevos documentos

1. Copiar los PDF nuevos dentro de `+/y/papers`.
2. Renombrarlos al formato `autor-año-titulo-del-paper.pdf`.
3. Ejecutar `./+/x/scripts/convert_papers.sh --new`.
4. Verificar que exista un `.md` correspondiente en `+/y/papers_md`.
5. Confirmar que el PDF nuevo haya quedado incorporado en `+/x/instrucciones/papers-convertidos.md`.

Nota:
al comenzar la ruta con `+`, conviene invocar el script desde la raíz del repositorio con el prefijo `./`.

## Observación práctica

Algunos PDF traen nombres originales truncados o no muestran con claridad autor y año en el nombre del archivo. En esos casos conviene revisar el propio documento antes de renombrarlo para evitar que el formato quede incompleto o incorrecto.
