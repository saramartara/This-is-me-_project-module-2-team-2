'use strict';

const form = document.querySelector('.js-form');

function handleSubmit(ev) {
  ev.preventDefault();
}

form.addEventListener('submit', handleSubmit);

function handle13Keydown(ev) {
<<<<<<< HEAD
  var keyCode = event.which;
  if (keyCode == 13) {
=======
  var keyCode = ev.which;
  if (keyCode === 13) {
>>>>>>> 5d77700d6228253b3ba3a94fe0185d76a385d268
    ev.preventDefault();
    return false;
  }
}
form.addEventListener('keydown', handle13Keydown);
