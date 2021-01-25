"use strict";
// RELLENA EMAIL

//llamamos a los elementos del html del input archivo fill html dato de entrada
const emailElement = document.querySelector("js-email");
// esta clase está en el archivo navArticle para el dato de salida
const emailPreviewElement = document.querySelector("js-preview-email");
// declaramos la funcion
function handleEmail(ev) {
  // llamamos al contenido dentro del input
  const emailValue = ev.target.value;
  // ver si está vacio o lleno para saber lo que se tiene que ver

  if (emailValue === "") {
    console.log("estoy vacio");
    emailPreviewElement.innerHTML = '<a href='sally-hill@gmail.com'>';
  } else {
    console.log("estoy relleno");
    emailPreviewElement.innerHTML = '<a href='emailValue'>'; 
  }
}

emailElement.addEventListener("keyup", handleEmail);
