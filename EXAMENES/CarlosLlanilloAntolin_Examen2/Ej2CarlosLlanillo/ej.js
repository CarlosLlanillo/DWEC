let numeroPensado = Math.floor(Math.random() * 100 + 1) - 1;
let intentos = 0;

addEventListener("load", inicio, false);

function inicio() {
  enviar.addEventListener("click", submit, false);
}

function submit() {
  // Comprobamos que sea un numero y este entre 1 y 100
  const prueba = parseInt(intento.value);
  intento.focus();
  if (!prueba || prueba < 1 || prueba > 100) {
    return (resultado.value =
      "Debes introducir un número entre 1 y 100\n" + resultado.value);
  }

  // Comprobamos si es menor o mayor y lo decimos
  intentos++;
  if (numeroPensado > prueba) {
    return (resultado.value = "El numero es mayor\n" + resultado.value);
  }
  if (numeroPensado < prueba) {
    return (resultado.value = "El numero es menor\n" + resultado.value);
  }

  // Si aciertas escribe el mensaje y resetea el juego
  resultado.value =
    `GENiAL!! HAS ACERTADO, MI NÚMERO ERA ${numeroPensado}\n` + resultado.value;

  alert(`Has necesitado ${intentos} intentos`);
  numeroPensado = Math.floor(Math.random() * 100 + 1) - 1;
}
