'use strict';

/*

Cómo vamos a usar siempre el local storage:

Guardar en el local storage:
- Cuando la usuaria haga cualquier cambio en la página que queramos guardar en el local storage llamamos a la función saveInLocalStorage
- 1º En ella obtenemos todos los datos a guardar
- 2º Los metemos en un objeto
- 3º Hacemos JSON.stringify
- 4º Hacemos localStorage.setItem(...)

Recuperar del local storage:
- Cuando arrancamos la página recuperamos los datos del local storage, para ello
- 1º Obtenemos los datos con localStorage.getItem(...)
- 2º Comprobamos si son datos válidos, diferente de null. Si no son datos válidos no hacemos nada más
- 3º Si son datos válidos los colocamos donde corresponda, en una variable global, en los campos de formulario con .value o donde sea.
- 4º En este proyecto en concreto los ponemos en el formulario
- 5º Llamamos a las funciones que replican los datos desde el formulario a la tarjeta

*/

// cuando la usuaria cambia cualquier cosa en el formulario debemos llamar a esta función
// function saveInLocalStorage() {
//   // obtengo los valores de todos los campos
//   const userData = {

function getUserData() {
  return {
    photo: photo,
    palette: parseInt(document.querySelector('.js-palette:checked').value),
    name: document.querySelector('.js-inputName').value,
    job: document.querySelector('.js-inputJob').value,
    email: document.querySelector('.js-inputEmail').value,
    phone: document.querySelector('.js-inputPhone').value,
    linkedin: document.querySelector('.js-inputLinkedin').value,
    github: document.querySelector('.js-inputGithub').value,
  };
}

function saveInLocalStorage() {
  const userData = getUserData();
  const userDataInString = JSON.stringify(userData);
  localStorage.setItem('userData', userDataInString);
}

function getFromLocalStorage() {
  const userDataInString = localStorage.getItem('userData');
  if (userDataInString !== null) {
    const userData = JSON.parse(userDataInString);
    document.querySelector('.js-inputName').value = userData.name;
    document.querySelector('.js-inputJob').value = userData.job;
    document.querySelector('.js-inputEmail').value = userData.email;
    document.querySelector('.js-inputPhone').value = userData.phone;
    document.querySelector('.js-inputLinkedin').value = userData.linkedin;
    document.querySelector('.js-inputGithub').value = userData.github;
    photo = userData.photo;
    const paletteElements = document.querySelector('.js-palette');
    for (const paletteElement of paletteElements) {
      if (paletteElement.value === userData.palette) {
        paletteElement.checked = true;
      }
    }
    // propago los datos desde el formulario a la tarjeta
    updateAllInputs();
    updatePalette();
    updatePhoto();
  }
}
