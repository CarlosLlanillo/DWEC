var num = 0;
var suma = 0;
while (num != 9999) {
    num = prompt("Introduce un numero");
    if (isNaN(num) || num == ``) {
        alert(`Introduzca un numero`);
    } else if (num == 9999) {
        alert(`Finalizado`);
    } else {
        suma += parseInt(num);
    }

}
alert(`La suma es: ${suma}`);