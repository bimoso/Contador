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

alert("Bienvenido a mi contador papu");

// Agrega un event listener al input para verificar si el campo está vacío
inputNumero.addEventListener("input", function() {
    // Verifica si el campo está vacío y establece el valor predeterminado como "0"
    if (inputNumero.value === "") {
      inputNumero.value = 0;
    }
  });

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