'use strict';

const form = document.querySelector('.js-form');

function handleSubmit(ev) {
  ev.preventDefault();
}

form.addEventListener('submit', handleSubmit);

function handle13Keydown(ev) {
  var keyCode = event.which;
  if (keyCode == 13) {
    ev.preventDefault();
    return false;
  }
}
form.addEventListener('keydown', handle13Keydown);
