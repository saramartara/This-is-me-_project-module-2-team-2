'use strict';

console.log('prueba');
// RELLENA EMAIL

//llamamos a los elementos del html del input archivo fill html dato de entrada
const emailElement = document.querySelector('.js-email');
// esta clase está en el archivo navArticle para el dato de salida
const emailPreviewElement = document.querySelector('.js-preview-email');
// declaramos la funcion
function handleEmail(ev) {
  // llamamos al contenido dentro del input
  const emailValue = ev.target.value;
  // ver si está vacio o lleno para saber lo que se tiene que ver

  /* ESTO SERÍA PARA EL FINAL DEL MODULO, SI NOS INTERESA AÑADIRLO: INVESTIGAR FUNCION DE JAVASCRIPT "TEST"
  
  const isValidEmail = emailValue.test()

  if (!isValidEmail) {
    console.log("estoy vacio");
    emailPreviewElement.href = ""; 
  } else*/

  if (emailValue === '') {
    console.log('estoy vacio');
    emailPreviewElement.href = ''; // las comillas de href deben estar vacias para que la usuaria no envie por error a sally un mensaje
  } else {
    console.log('estoy relleno');
    emailPreviewElement.href = 'mailto:' + emailValue; // nos faltaba añadir "mailto:"
  }
}
// escuchar el evento y ejecuta la funcion  handleEmail
emailElement.addEventListener('keyup', handleEmail);

//RELLENA GitHub

// input data que rellena usaria en formulario fill.html
const githubElement = document.querySelector('.js-github');

// output data: previsualización icono gitHub navegador en navArticle.html
const githubPreviewElement = document.querySelector('.js-preview-github');

// función handleGithub: si el input está vacío, muestra href vacío
// sino = está relleno = enlaza el valor escrito en el preview

function handleGithub(ev) {
  const githubValue = ev.target.value;

  if (githubValue === '') {
    console.log('estoy vacio');
    githubPreviewElement.href = '';
  } else {
    console.log('estoy relleno');
    githubPreviewElement.href = githubValue;
  }
}
//cuando la usuaria rellene el campo de GitHub
// --> que se ejecute la función handleGitHub

githubElement.addEventListener('keyup', handleGithub);
