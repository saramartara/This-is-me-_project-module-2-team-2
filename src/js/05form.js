'use strict';

// prevenimos el envío del formulario

const form = document.querySelector('.js-form');

function handleSubmit(ev) {
  ev.preventDefault();
}

form.addEventListener('submit', handleSubmit);
