function promptInt(pregunta = "") {
  const num = parseInt(prompt(pregunta));

  if (isNaN(num)) {
    alert(`Entero introducido invalido`)
    return promptInt(pregunta);
  }

  return num;
}

let num = promptInt(`¿Cuanto es 15 + 15?`);
alert(num === 30 ? `Correcto` : `Incorrecto`);
