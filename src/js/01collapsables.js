'use strict';

//la clase .js-slide se aplica al contenedor padre en la sección design.html <fliesdset>

const collapsable = document.querySelector('.js-slide');
const collapsableHeader = document.querySelector('.collapsable__header');
// const collapsableContent = document.querySelector('.js-content');

function show() {
  collapsable.classList.toggle('collapsable--close');
}

collapsableHeader.addEventListener('click', show);
