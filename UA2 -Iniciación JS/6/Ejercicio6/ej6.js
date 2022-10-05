
var suma = 0;
var multiplicacion = 1;
var cont = 0;
while(cont<4){
    var num = prompt(`Introduce un numero`);
    suma =+ num;
    multiplicacion *= num;
    cont++;
}
alert(`La suma de los numeros es: ${suma}`);
alert(`El producto de los numeros es: ${multiplicacion}`);