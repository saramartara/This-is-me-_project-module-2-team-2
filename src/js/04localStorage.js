'use strict';
const resetButtonElement = document.querySelector('.js-reset');

function resetInfo() {
  localStorage.clear();
}
resetButtonElement.addEventListener('click', resetInfo);

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

    const paletteElements = document.querySelectorAll('.js-palette');
    for (const paletteElement of paletteElements) {
      if (paletteElement.value === userData.palette) {
        paletteElement.checked = true;
      }
    }

    updateAllInputs();
    updatePalette();
    updatePhoto();
  }
}
