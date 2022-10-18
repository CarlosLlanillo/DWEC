
addEventListener('load', function () {
    var formulario = document.getElementById("formulario");

    visualizar.addEventListener("click", function () {

        resultado.value = nombre.value + `, ` + apellido.value;

    }, false);
}, false);