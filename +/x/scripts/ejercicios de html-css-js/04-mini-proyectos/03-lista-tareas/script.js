// Guia de lectura:
// Fila 1: se obtiene la etiqueta <button id="agregar">.
// Fila 2: se obtiene la etiqueta <ul id="lista">.
// Fila 4: se escucha el clic del boton.
// Fila 5: se busca el input.
// Fila 6: se limpia el texto con trim().
// Fila 8: if evita agregar tareas vacias.
// Filas 12 a 14: se crea un <li>, se llena y se agrega a la lista.

// Fila 9: referencia al boton que agregara tareas.
const botonAgregar = document.getElementById("agregar");
// Fila 11: referencia a la lista donde apareceran los elementos.
const lista = document.getElementById("lista");

// Fila 13: addEventListener reacciona cuando el usuario presiona "Agregar".
botonAgregar.addEventListener("click", function () {
  // Fila 14: se obtiene la caja de texto.
  const input = document.getElementById("tarea");
  // Fila 15: trim() quita espacios extra al inicio y al final.
  const texto = input.value.trim();

  // Fila 17: si el texto esta vacio, la funcion termina y no agrega nada.
  if (texto === "") {
    return;
  }

  // Fila 21: createElement("li") crea una nueva etiqueta de lista.
  const item = document.createElement("li");
  // Fila 22: el <li> recibe como contenido el texto escrito por el usuario.
  item.textContent = texto;
  // Fila 23: appendChild inserta el nuevo <li> dentro de la <ul>.
  lista.appendChild(item);
  // Fila 24: se limpia el input para que el usuario pueda escribir otra tarea.
  input.value = "";
});
