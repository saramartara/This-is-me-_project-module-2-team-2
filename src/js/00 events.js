"use strict";
// RELLENA EMAIL

//llamamos a los elementos del html del input archivo fill html dato de entrada
const emailElement = document.querySelector(".js-email");
// esta clase está en el archivo navArticle para el dato de salida
const emailPreviewElement = document.querySelector(".js-preview-email");
// declaramos la funcion
function handleEmail(ev) {
  // llamamos al contenido dentro del input
  const emailValue = ev.target.value;
  // ver si está vacio o lleno para saber lo que se tiene que ver

  if (emailValue === "") {
    console.log("estoy vacio");
    emailPreviewElement.href = "sally-hill@gmail.com"; // comprobar si href funciona
  } else {
    console.log("estoy relleno");
    emailPreviewElement.href = "emailValue"; // comprobar si href funciona
  }
}
// escuchar el evento y ejecuta la funcion  handleEmail
emailElement.addEventListener("keyup", handleEmail);
