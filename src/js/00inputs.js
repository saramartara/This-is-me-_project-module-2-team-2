'use strict';
const inputsTextConfig = [
  {
    inputClass: '.js-name',
    cardClass: '.js-namePreview',
    defaultValue: 'Nombre Apellido',
    cardPrefix: '',
    cardElementAttribute: 'innerHTML',
  },
  {
    inputClass: '.js-position',
    cardClass: '.js-positionPreview',
    defaultValue: 'Front-end developer',
    cardPrefix: '',
    cardElementAttribute: 'innerHTML',
  },

  {
    inputClass: '.js-email',
    cardClass: '.js-emailPreview',
    defaultValue: '',
    cardPrefix: 'mailto:',
    cardElementAttribute: 'href',
  },
  {
    inputClass: '.js-phone',
    cardClass: '.js-phonePreview',
    defaultValue: '',
    cardPrefix: 'tel:',
    cardElementAttribute: 'href',
  },
  {
    inputClass: '.js-linkedin',
    cardClass: '.js-linkedinPreview',
    defaultValue: '',
    cardPrefix: 'https://www.linkedin.com/in/',
    cardElementAttribute: 'href',
  },
  {
    inputClass: '.js-github',
    cardClass: '.js-githubPreview',
    defaultValue: '',
    cardPrefix: 'https://github.com/',
    cardElementAttribute: 'href',
  },
];

function updateAllInputs() {
  for (const inputTextConfig of inputsTextConfig) {
    const inputElement = document.querySelector(inputTextConfig.inputClass);
    const cardElement = document.querySelector(inputTextConfig.cardClass);
    let newValue = inputElement.value;
    if (inputTextConfig.cardElementAttribute === 'innerHTML') {
      if (inputElement.value === '') {
        newValue = inputTextConfig.defaultValue;
      } else {
        newValue = inputElement.value;
      }
      cardElement.innerHTML = newValue;
    } else if (inputTextConfig.cardElementAttribute === 'href') {
      if (inputElement.value === '') {
        newValue = '#';
      } else {
        newValue = newValue.replace(inputTextConfig.cardPrefix, '');
        newValue = inputTextConfig.cardPrefix + newValue;
      }
      cardElement.href = newValue;
    }
  }
  saveInLocalStorage();
}

const inputTextElements = document.querySelectorAll('.js-inputText');
for (const inputTextElement of inputTextElements) {
  inputTextElement.addEventListener('keyup', updateAllInputs);
}
