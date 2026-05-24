# PEP 703: Making the Global Interpreter Lock Optional in CPython

- Tipo: extracto web
- Sitio: Python Enhancement Proposals
- Clave bibliografica: `pep7032023`
- URL: `https://peps.python.org/pep-0703/`
- Fecha de consulta en bibliografia: `2026-05-23`
- Capitulo(s) donde ya se cita: 2
- Temas: GIL, paralelismo, CPython, cambio-estructural

## Resumen util

PEP 703 propone una configuracion de compilacion de CPython que permita ejecutar Python sin el Global Interpreter Lock. El argumento central es que el GIL limita el uso eficiente de procesadores multinucleo cuando se trabaja con hilos.

Para el manual, este documento es valioso no por sus detalles de implementacion, sino porque muestra un debate estructural dentro del propio ecosistema Python: como mejorar el paralelismo sin abandonar compatibilidad, seguridad y estabilidad.

## Datos puntuales aprovechables

- El GIL impide que multiples hilos ejecuten codigo Python al mismo tiempo.
- La propuesta se formula como una configuracion opcional (`--disable-gil`), no como una eliminacion inmediata y universal.
- El problema se conecta directamente con el aprovechamiento de CPU multinucleo.

## Posibles usos en el manual

- explicar por que se menciona PEP 703 en la historia reciente del lenguaje;
- introducir de forma prudente el tema del paralelismo en Python;
- mostrar que incluso lenguajes maduros siguen discutiendo sus limites estructurales.
