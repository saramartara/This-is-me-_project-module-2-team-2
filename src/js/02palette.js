'use strict';

const paletteElements = document.querySelectorAll('.js-palette');
const cardElement = document.querySelector('.js-card');
let checkedPalette = 1;

function updatePalette() {
  cardElement.classList.remove('palette1', 'palette2', 'palette3', 'palette4');
  const checkedPaletteElement = document.querySelector('.js-palette:checked');
  checkedPalette = checkedPaletteElement.value;
  cardElement.classList.add('palette' + checkedPalette);
  // después de cualquier acción del usuario guardo en el local storage
  saveInLocalStorage();
}

for (const paletteElement of paletteElements) {
  paletteElement.addEventListener('change', updatePalette);
}
