var cont=0;
var pares=0;
var inpares=0;
do{
    var num=prompt("Introduce un numero:")
    if(num==""){
        alert("No introdujiste nada");
    }else if(!isNaN(num)){
        if(num%2===0){
            pares++;
        }else{
            inpares++;
        }
        cont++;
    }else{
        alert("Eso no es un número");
    }
}while(cont!=5);

alert(`Has introducido:
${pares} numero/s pares
${inpares} numero/s inpares`);