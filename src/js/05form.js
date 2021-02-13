'use strict';

// prevenimos el envío del formulario

const form = document.querySelector('.js-form');

function handleSubmit(ev) {
  ev.preventDefault();
}

form.addEventListener('submit', handleSubmit);

// prevenimos la apertura de ventana al pulsar intro (keyCode=13)
function handle13Keydown(ev) {
  var keyCode = event.which;
  console.log('tecla que me presiona', keyCode)
  if (keyCode == 13){
    ev.preventDefault();
    return false;
  }
}
form.addEventListener('keydown', handle13Keydown);
