var cont=0;
var numaux=0;
while(cont!=3){
    num=prompt("Introduce un numero:");
    if(num==""){
        alert("No escribiste nada");
    }else if(!isNaN(num)){
        cont++;
        if(numaux<=num){
            numaux=num;
        }
    }else{
        alert("No escribiste un número");
    }
}

alert(`El número mayor introducido es ${numaux}`);