//escribimos la variable de la cadena, el numero, y el contador.
var cadena = " ";
var num = 0;
var cont = 0;

//mientras el contador sea menos de 25, sumamos 11 al número y colocamos la cadena para que lea el número siguiente, hasta que son 25.
while (cont < 25) {
    cont++;
    num += 11;
    cadena += num + " ";
}
//Una vez ha terminado, mostramos la cadena.
alert(`${cadena}`);