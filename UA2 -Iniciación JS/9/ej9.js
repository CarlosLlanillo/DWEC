let num = promptNumber(`Introduce un numero`);
switch (true) {
  case num > 0:
    alert(`Es positivo`);
    break;
  case num < 0:
    alert(`Es negativo`);
    break;
  default:
    alert(`Es 0`);
}

function promptNumber(pregunta = "") {
  const num = parseInt(prompt(pregunta));

  if (isNaN(num)) return promptNumber(pregunta);

  return num;
}
