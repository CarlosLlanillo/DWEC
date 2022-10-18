// import { promptNumber } from "../../utils/alertUtils.js";
// require("../../utils/alertUtils.js");

function promptInt(pregunta = "") {
  const num = parseInt(prompt(pregunta));

  if (isNaN(num)) {
    alert(`Entero introducido invalido`);
    return promptInt(pregunta);
  }

  return num;
}

function main() {
  let numeros = [];
  for (let i = 0; i < 2; i++) {
    numeros[i] = promptInt(`Introduce un numero`);
  }

  while (true) {
    let operador = prompt("Operador (* / + -)");
    switch (operador) {
      case "*":
        return alert(numeros.reduce((pV, cV) => pV * cV));
      case "/":
        return alert(numeros.reduce((pV, cV) => pV / cV));
      case "+":
        return alert(numeros.reduce((pV, cV) => pV + cV));
      case "-":
        return alert(numeros.reduce((pV, cV) => pV - cV));
    }
  }
}

main();
