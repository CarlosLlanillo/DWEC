//Recogemos el valor del confirm (true/false)
var respuesta = confirm("¿Desea acceder a la pagina?");

//Si es aceptar -> true
if(respuesta)
{
    //Pedimos la contraseña
    var contrasenia = prompt("Contraseña: ");

    //Mientras la contraseña sea distinta de la especifiacada vuelve a pedirla
    while(contrasenia != "1234AbcD"){
        alert(`La contraseña introducida es incorrecta.`)
        contrasenia = prompt("Contraseña: ");
    }

    //Si la contraseña es la misma muestra un alert y termina
    alert(`La contraseña es correcta, puede entrar.`)
}