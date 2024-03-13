//alert("Hola este es mi Javascript");

// let nombre1 = "Karla";
// nombre1 = "Ivonne";

// var nombre2 = "Karla";
// nombre2 = "Camila";

// const nombre3 = "Karla";

// console.log(nombre1);
// console.log(nombre2);
// console.log(nombre3);

// SELECCIONAR ELEMENTOS

let contenidoTitulo = "Sobre mi"

let titulo = document.querySelector(".menu .B2")
//titulo.innerHTML = contenidoTitulo;

//CONDICIONALES
let textoTitulo = titulo.innerText;
console.log(textoTitulo);

if (textoTitulo == "Sobre mi") {
    titulo.innerHTML = "Otro"}
    else {
        console.log("no se cumple")
    }


const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  parrafo.innerHTML = "";

  if (nombre.value.length < 4) {
    warnings += `El nombre debe contener más de 4 caracteres`;
    valido = false;
  }

  if (!valido) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "Enviado";
  }
  return valido;
}

form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});