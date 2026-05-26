// Guia de lectura:
// Fila 1: se busca el boton del calculo.
// Fila 2: se busca el parrafo del resultado.
// Fila 4: se escucha el clic del boton.
// Filas 5 y 6: se leen los dos inputs numericos.
// Fila 7: se calcula el total.
// Fila 9: se muestra el resultado en pantalla.

// Fila 8: se guarda una referencia al boton.
const botonCalcular = document.getElementById("calcular");
// Fila 10: se guarda una referencia al parrafo donde aparecera el resultado.
const resultado = document.getElementById("resultado");

// Fila 12: este evento ejecuta el calculo cuando el usuario hace clic.
botonCalcular.addEventListener("click", function () {
  // Fila 13: Number() convierte el valor del input en numero real.
  const multaPorDia = Number(document.getElementById("multa").value);
  // Fila 14: aqui se leen los dias de retraso y tambien se convierten a numero.
  const dias = Number(document.getElementById("dias").value);
  // Fila 15: se multiplica multa por dia por la cantidad de dias.
  const total = multaPorDia * dias;

  // Fila 17: textContent actualiza el <p id="resultado"> con el nuevo monto.
  resultado.textContent = "Monto total: " + total;
});
