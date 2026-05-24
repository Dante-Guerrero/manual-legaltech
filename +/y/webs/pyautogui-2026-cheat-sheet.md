# Cheat Sheet

- Tipo: extracto web
- Sitio: PyAutoGUI Documentation
- Clave bibliografica: `pyautogui2026`
- URL: `https://pyautogui.readthedocs.io/en/latest/quickstart.html`
- Fecha de consulta en bibliografia: `2026-05-24`
- Capitulo(s) donde podria citarse: 4
- Temas: pyautogui, automatizacion, interfaz, fail-safe

## Resumen util

La referencia rapida de PyAutoGUI presenta la biblioteca como un modulo de automatizacion GUI multiplataforma que puede controlar mouse y teclado y realizar acciones basicas de reconocimiento visual. Eso se alinea con el tramo final del capitulo 4, donde la automatizacion sale del archivo y actua directamente sobre la interfaz.

La misma guia subraya dos elementos de seguridad pedagogicamente importantes: la pausa global entre acciones y el modo fail-safe que permite abortar moviendo el mouse a una esquina. Para el manual, esto ayuda a evitar una presentacion ingenua de la automatizacion de escritorio.

## Datos puntuales aprovechables

- PyAutoGUI automatiza mouse y teclado en Windows, macOS y Linux.
- Puede instalarse con `pip install pyautogui`.
- `pyautogui.PAUSE` permite introducir pausas entre acciones.
- El modo `FAILSAFE` permite abortar la ejecucion moviendo el mouse a la esquina superior izquierda.

## Posibles usos en el manual

- respaldar las advertencias del ejercicio de automatizacion de escritorio;
- reforzar que automatizar una interfaz real exige control y prudencia;
- mostrar una forma concreta de pasar de scripts sobre archivos a scripts sobre acciones visibles.
