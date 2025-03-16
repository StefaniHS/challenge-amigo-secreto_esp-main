


//aqui se almacenan los nombres ingresados
let amigo = [];


function agregarAmigo() {
    let nombreDeAmigo = document.getElementById("amigo").value;

    //validación de datos donde nos permite ingresar nombres con mayusculas, minusculas y tildes
    let valoresPermitidos = /^[a-zA-ZáéíóúÁÉÍÓÚ]+$/;

    //Se esta evaluando si el valor de la variable nombreDeAmigo no cumple con una condición establecida 
    // por la expresión valoresPermitidos.
    if (!valoresPermitidos.test(nombreDeAmigo)) {
        alert("El valor ingresado no es válido. Por favor, ingresa un nombre.");
        limpiarCaja();
        return;
    } else {
        amigo.push(nombreDeAmigo);
        limpiarCaja();
        mostrarListaAmigos();

    }
}

function limpiarCaja() {
    document.getElementById("amigo").value = "";
    //coloca el cursor al inicio de la caja para ingresar el siguiente nombre
    document.getElementById("amigo").focus();
}

function mostrarListaAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for (let i = 0; i < amigo.length; i++) {
        let item = document.createElement("li");
        item.textContent = [i+1]+ ") "+amigo[i];
        listaAmigos.appendChild(item);
    }
}

function sortearAmigo() {
    //compara valor y contenido
    if (amigo.length === 0) {
        alert("No existen amigos para sortear");
        return;
    }
    let amigoSorteado = amigo[Math.floor(Math.random() * amigo.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;
  
    document.getElementById("reiniciar").removeAttribute('disabled');


}


function reiniciarSorteo() {

    let limpiarLista = document.getElementById("listaAmigos");
    limpiarLista.innerHTML = "";
    let limpiarResultado = document.getElementById("resultado")
    resultado.innerHTML = "";
    amigo = [];
    document.getElementById("amigo").focus();
    alert("Ahora puedes ingresar nuevamente los nombres a sortear");
    document.getElementById("reiniciar").setAttribute('disabled', 'true');

}

