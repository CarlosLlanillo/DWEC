var num = 0;
var suma = 0;
while (num < 5) {
    var numero = prompt("Introduzca un numero");
    if (isNaN(numero)) {
        alert("Error debe introducir un numero");
    } else if (numero == ``) {
        alert("Error debe introducir un numero");
    } else {
        num++;
        suma += parseInt(numero);
    }
}
alert(`La suma es: ${suma}`);