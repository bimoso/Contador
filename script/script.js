// Obtén los elementos del DOM
var contadorElemento = document.getElementById("contador");
var inputNumero = document.getElementById("numero");
var btnAñadir = document.getElementById("btnAñadir");
var btnQuitar = document.getElementById("btnQuitar");
var btnIncrementar = document.getElementById("btnIncrementar");
var btnDecrementar = document.getElementById("btnDecrementar");
var btnReset = document.getElementById("btnReset");

// Inicializa el contador
var contador = 0;
actualizarContador();

// Agrega event listeners a los botones
btnAñadir.addEventListener("click", function () {
    let numero = parseInt(inputNumero.value);
    contador += numero;
    actualizarContador();
});

btnQuitar.addEventListener("click", function () {
    let numero = parseInt(inputNumero.value);
    contador -= numero;
    actualizarContador();
});

btnIncrementar.addEventListener("click", function () {
    contador++;
    actualizarContador();
});

btnDecrementar.addEventListener("click", function () {
    contador--;
    actualizarContador();
});

btnReset.addEventListener("click", function () {
    contador = 0;
    actualizarContador();
});

// Función para actualizar el contenido del contador en el DOM
function actualizarContador() {
    contadorElemento.innerText = contador.toString();
}