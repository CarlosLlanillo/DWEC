addEventListener("load", inicio, false);

function inicio() {
  Validar.addEventListener("click", validar, false);
}

async function validar() {
  // Comprobamos si es un numero y si es así
  // dejamos en blaco la casilla y la señalamos
  if (!!parseInt(Entrada.value) || Entrada.value.length !== 1) {
    Entrada.value = "";
    Entrada.focus();
    return;
  }

  // Cuando sea un * hacemos la validacion para terminar
  if (Entrada.value === "*") {
    if (!confirm(`Quieres continuar`)) {
      alert(`Adios`);
      Formulario.hidden = true;
      return;
    }

    Formulario.reset();
  }

  // Si pasa las validaciones escribe la letra en la caja 
  // lo señala y la cantidad de caracteres en la otra caja
  Info.value = `${Info.value}${Entrada.value}`;
  Entrada.focus();
  
  Resultado.value = Info.value.length;
}
