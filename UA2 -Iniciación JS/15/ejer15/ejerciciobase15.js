//Bucle do while para repetir la misma pregunta del presidente
do{
    //ponemos la variable respuesta y hacemos un prompt.
    respuesta=0;
    respuesta=prompt(`¿Cuál fue el primer presidente de la democracia española?`);
    //un if para que lo recorra cuando no es null y lo saque al final.
    if(respuesta!=null){
        //en cada if ponemos los distintos nombres en mayúscula y minúscula.
        if(respuesta==="Adolfo" || respuesta==="adolfo"){
            alert (`Te falta el apellido, introduce el nombre y el apellido seguido de un espacio`);
        }else if (respuesta==="Suarez" || respuesta==="suarez"){
            alert (`Te falta el nombre, introduce el nombre y el apellido seguido de un espacio`);
            //cuando están tanto el nombre y el apellido colocados termina de recorrer el bucle.
        }else if (respuesta==="Adolfo Suarez" || respuesta==="adolfo suarez"){
            alert (`Introducido correctamente`);
            respuesta=null;
        }else{
            alert (`Incorrecto`);
        }
    }
}while (respuesta!=null);