'use strict';
//NOMBRE
const nameElement = document.querySelector('.js-name');
const namePreviewElement = document.querySelector('.js-preview-name');

function handleName(event) {
  const nameValue = event.target.value;
  if (nameValue === '') {
    namePreviewElement.innerHTML = 'Nombre Apellido';
  } else {
    namePreviewElement.innerHTML = nameValue;
  }
}

nameElement.addEventListener('keyup', handleName);

//PUESTO
const positionElement = document.querySelector('.js-position');
const positionPreviewElement = document.querySelector('.js-positionPreview');

function handlePosition(event) {
  const positionValue = event.target.value;

  if (positionValue === '') {
    positionPreviewElement.innerHTML = 'Front-end developer';
  } else {
    positionPreviewElement.innerHTML = positionValue;
  }
}

positionElement.addEventListener('keyup', handlePosition);

//IMAGEN DE PERFIL

//EMAIL
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
emailElement.addEventListener('keyup', handleEmail);

//TELEFONO
const phoneElement = document.querySelector('.js-phone');
const phonePreviewElement = document.querySelector('.js-phonePreview');
function handlePhone(event) {
  const phoneValue = event.target.value;

  if (phoneValue === '') {
    phonePreviewElement.href = '';
  } else {
    phonePreviewElement.href = 'tel:' + phoneValue;
  }
}

phoneElement.addEventListener('keyup', handlePhone);

//LINKEDIN
//llamamos a los elementos del html del input archivo fill html dato de entrada
const linkedinElement = document.querySelector('.js-linkedin');
// esta clase está en el archivo navArticle para el dato de salida
const linkedinPreviewElement = document.querySelector('.js-preview-linkedin');
// declaramos la funcion
function handlelinkedin(ev) {
  // llamamos al contenido dentro del input
  const linkedinValue = ev.target.value;
  // ver si está vacio o lleno para saber lo que se tiene que ver

  /* ESTO SERÍA PARA EL FINAL DEL MODULO, BONUS, ELIMINAR EL HTTPS QUE COPIA/PEGA LA USUARIA*/

  if (linkedinValue === '') {
    console.log('estoy vacio');
    linkedinPreviewElement.href = ''; // las comillas de href deben estar vacias para que la usuaria no coloque el enlace de sally en su card
  } else {
    console.log('estoy relleno');
    linkedinPreviewElement.href = linkedinValue; // nos faltaba añadir "mailto:"
  }
}
// escuchar el evento y ejecuta la funcion  handleEmail
linkedinElement.addEventListener('keyup', handlelinkedin);

//GITHUB
