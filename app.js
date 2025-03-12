// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//funcion Validar entrada
//funcion Agregar nombres
//Visualizar la lista
//funcion Sorteo aleatorio

//let nombreDeAmigo= prompt("Escribe un nombre");

function asignarTextoElemento(elemento, texto) {
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return;
}

asignarTextoElemento('h1', 'Amigo Secreto');
asignarTextoElemento('h2', 'Digite el nombre de sus amigos');

//dentro de esta funcion debe estar pedir, validar si es string, almacenar y mostrar el nombre
function validarEntrada() {
    let nombreDeAmigo = String(document.getElementById("amigo").value);

    //nos permite ingresar nombres con masyusculas, minusculas, tildes y espacios
    let valoresPermitidos = /^[a-zA-ZáéíóúÁÉÍÓÚ\s]+$/;

    if (!valoresPermitidos.test(nombreDeAmigo)) {
        asignarTextoElemento("p", "El valor ingresado no es válido. Por favor, ingresa un nombre válido.");
    } else {
        asignarTextoElemento("p", nombreDeAmigo)
        return;
    }
}

