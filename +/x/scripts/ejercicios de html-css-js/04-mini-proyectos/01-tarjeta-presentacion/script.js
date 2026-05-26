// Guia de lectura:
// Fila 1: se obtiene la etiqueta <button id="boton">.
// Fila 2: se obtiene la etiqueta <p id="mensaje">.
// Fila 4: se agrega el evento click.
// Fila 5: se cambia el texto del parrafo y se ve el nuevo mensaje.

// Fila 6: se guarda una referencia al boton para escuchar clics.
const boton = document.getElementById("boton");
// Fila 8: se guarda una referencia al parrafo que sera actualizado.
const mensaje = document.getElementById("mensaje");

// Fila 10: addEventListener reacciona cuando el usuario hace clic.
boton.addEventListener("click", function () {
  // Fila 11: textContent reemplaza el texto visible del parrafo.
  mensaje.textContent = "Ahora tambien estoy practicando interactividad con JavaScript.";
});
