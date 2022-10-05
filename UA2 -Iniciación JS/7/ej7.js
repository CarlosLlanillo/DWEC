let count = 0;
let array = Array(3);

while (count < array.length) {
  let num = parseInt(prompt(`${count + 1} Introduce un numero`));
  if (isNaN(num)) {
    alert(`No es un numero`);
    continue;
  }

  array[count] = num;
  count++;
}
console.log(array);
const media = array.reduce((pV, cV) => pV + cV, 0) / array.length;
alert(`${media.toFixed(2)} ${media >= 5 ? "Promociona" : "No promociona"}`);
