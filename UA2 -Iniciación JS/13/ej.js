function promptInt(pregunta = "") {
  const num = parseInt(prompt(pregunta));

  if (isNaN(num)) {
    alert(`Entero introducido invalido`);
    return promptInt(pregunta);
  }

  return num;
}

function pregunta15Duplicado() {
  let num = promptInt(`Introduce un numero`);
  if (num !== 30) {
    alert(`Incorrecto`);
    return confirm(`¿Quieres volver a intentarlo?`) && pregunta15Duplicado();
  }

  alert(`Correcto`);
}

pregunta15Duplicado();
