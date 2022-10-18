function contarPreguntasNumericas(count = 0) {
  let num = prompt(`Introduce un numero`);
  console.log(count, num);
  if (!num || isNaN(num)) return count;

  return contarPreguntasNumericas(count + 1);
}

let count = contarPreguntasNumericas();
alert(`Has introducido ${count} numeros`);
