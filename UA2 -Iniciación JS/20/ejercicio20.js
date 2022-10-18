var numero = prompt(`Introduce un numero entero`);

if (!isNaN(numero)) {
var factorial=1; 
	for (i=1; i<=numero; i++) {
		factorial = factorial * i; 
	}
	alert(`El factorial del numero entero: ${numero} es ${factorial}`);
} else {
    alert(`Introduce solo un valor entero`);
}