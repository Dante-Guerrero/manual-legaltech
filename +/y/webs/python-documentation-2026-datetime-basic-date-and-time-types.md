# datetime - Basic date and time types

- Tipo: extracto web
- Sitio: Python Documentation
- Clave bibliografica: `pythondatetime2026`
- URL: `https://docs.python.org/3.14/library/datetime.html`
- Fecha de consulta en bibliografia: `2026-05-24`
- Capitulo(s) donde podria citarse: 3
- Temas: datetime, fechas, plazos, strptime

## Resumen util

La documentacion oficial de `datetime` presenta el modulo como la herramienta estandar de Python para manipular fechas y horas, con clases como `date`, `datetime` y `timedelta`. Esto encaja directamente con el capitulo 3, donde Python deja de ser solo sintaxis para pasar a resolver problemas temporales muy parecidos a los del trabajo juridico.

Tambien es muy util que la documentacion detalle `date.today()` y `datetime.strptime()`, y que advierta sobre cuestiones concretas de parseo como formatos ambiguos y fechas incompletas sin año. Eso aporta criterio tecnico para no presentar el manejo de plazos como una simple suma ingenua de strings.

## Datos puntuales aprovechables

- El modulo `datetime` suministra clases para manipular fechas y horas.
- `date.today()` devuelve la fecha local actual.
- `datetime.strptime(date_string, format)` convierte texto en objetos de fecha y hora segun un formato dado.
- `timedelta` representa duraciones y diferencias entre fechas u horas.

## Posibles usos en el manual

- respaldar los ejercicios de fecha actual, diferencia de dias y vencimientos;
- advertir que trabajar con fechas exige formatos claros y criterios consistentes;
- reforzar la idea de que los plazos pueden programarse como objetos y no solo como texto.
