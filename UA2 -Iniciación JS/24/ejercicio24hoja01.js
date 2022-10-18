var correc=false;
var num1=0;
var num2=0;
var operador="";
var operacion=0;
while(!correc){
    num1=prompt("Introduce un número:");
    num2=prompt("Introduce un número:");
    if(num1==""||num2==""){
        alert("No escribiste nada en alguno de los dos");
    }else if(!isNaN(num1)&&!isNaN(num2)){
        operador=prompt("Introduce el operador para realizar la operacion correspondiente:(+-*/)");
        switch(operador){
            case "+":
                operacion=parseFloat(num1)+parseFloat(num2);
                correc=true;
                alert(`${num1} + ${num2} = ${operacion}`);
            break;
            case "-":
                operacion=parseFloat(num1)-parseFloat(num2);
                correc=true;
                alert(`${num1} - ${num2} = ${operacion}`);
            break;
            case "*":
                operacion=parseFloat(num1)*parseFloat(num2);
                correc=true;
                alert(`${num1} * ${num2} = ${operacion}`);
            break;
            case "/":
                operacion=parseFloat(num1)/parseFloat(num2);
                correc=true;
                alert(`${num1} / ${num2} = ${operacion}`);
            break;
            default:
                alert("No introduciste un operador.");
            break;
        }
    }else{
        alert("No escribiste un número en alguno de los dos");
    }
}


