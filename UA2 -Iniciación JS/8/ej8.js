let count = 0;
let array = Array(2);

while (count < array.length) {
  let num = promptNumber(`${count + 1} Introduce un numero`);

  array[count] = num;
  count++;
}
console.log(array);
if (array[0] > array[1])
  alert(`Suma:${array[0] + array[1]} Resta:${array[0] - array[1]}`);
else alert(`Producto:${array[0] * array[1]} Division:${array[1] / array[0]}`);

function promptNumber(pregunta = "") {
  const num = parseInt(prompt(pregunta));

  if (isNaN(num)) return promptNumber(pregunta);

  return num;
}
