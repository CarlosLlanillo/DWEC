var contador = 0;
var cp = 0;
var ci = 0;

while(contador < 5){

    var numero = prompt("Introduce un número");
    contador++;

    if(numero %2 ==0 && !isNaN(numero)){

        alert(`Es par: ${numero}`)
        cp++;
    }

    else if(numero %2 !=0 && !isNaN(numero)){

        alert(`Es impar: ${numero}`);
        ci++;
    }

    
}

alert (`Se introdujeron ${cp} pares y ${ci} impares.`);

