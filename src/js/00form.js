'use strict';

//NOMBRE
const nameElement = document.querySelector('.js-name');
const namePreviewElement = document.querySelector('.js-namePreview');

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

// Nueva función para reaprovechar código

//IMAGEN DE PERFIL

//EMAIL

const emailElement = document.querySelector('.js-email');
const emailPreviewElement = document.querySelector('.js-emailPreview');
function handleEmail(ev) {
  const emailValue = ev.target.value;

  if (emailValue === '') {
    emailPreviewElement.href = '';
  } else {
    emailPreviewElement.href = 'mailto:' + emailValue;
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
const linkedinElement = document.querySelector('.js-linkedin');
const linkedinPreviewElement = document.querySelector('.js-linkedinPreview');
function handlelinkedin(ev) {
  const linkedinValue = ev.target.value;
  if (linkedinValue === '') {
    linkedinPreviewElement.href = '';
  } else {
    linkedinPreviewElement.href = linkedinValue;
  }
}
linkedinElement.addEventListener('keyup', handlelinkedin);

//GITHUB
const githubElement = document.querySelector('.js-github');
const githubPreviewElement = document.querySelector('.js-githubPreview');

function handleGithub(ev) {
  const githubValue = ev.target.value;

  if (githubValue === '') {
    githubPreviewElement.href = '';
  } else {
    githubPreviewElement.href = githubValue;
  }
}
githubElement.addEventListener('keyup', handleGithub);
