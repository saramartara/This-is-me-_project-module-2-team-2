'use strict';

const collapsable = document.querySelector('.js-slide');
const collapsableHeader = document.querySelector('.collapsable__header');

function show() {
  collapsable.classList.toggle('collapsable--close');
}

collapsableHeader.addEventListener('click', show);
