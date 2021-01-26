'use strict';

//la clase .js-slide se aplica al contenedor padre en la sección design.html <fliesdset>

const collapsable = document.querySelector('.js-slide');
function show() {
  collapsable.classList.toggle('collapsable--close');
}
collapsable.addEventListener('click', show);
