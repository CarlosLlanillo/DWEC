let num = promptNumber(`Introduce un numero`);
switch (true) {
  case num >= 0 && num <= 12:
    alert(`Niño`);
    break;
  case num > 12 && num <= 26:
    alert(`Joven`);
    break;
  case num > 26 && num <= 60:
    alert(`Adulto`);
    break;
  case num > 60:
    alert(`Anciano`);
    break;
  default:
    alert(`Es 0`);
}

function promptNumber(pregunta = "") {
  const num = parseInt(prompt(pregunta));

  if (isNaN(num) || num < 0) return promptNumber(pregunta);

  return num;
}
