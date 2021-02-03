'use strict';

const collapsable1 = document.querySelector('.js-slide1');
const collapsable2 = document.querySelector('.js-slide2');
const collapsable3 = document.querySelector('.js-slide3');

const designElement = document.querySelector('.js-design');
const fillElement = document.querySelector('.js-fill');
const shareElement = document.querySelector('.js-share');

function handleShow1() {
  collapsable1.classList.toggle('collapsable--close');
}
function handleShow2() {
  collapsable2.classList.toggle('collapsable--open');
}
function handleShow3() {
  collapsable3.classList.toggle('collapsable--open');
}

designElement.addEventListener('click', handleShow1);
fillElement.addEventListener('click', handleShow2);
shareElement.addEventListener('click', handleShow3);
