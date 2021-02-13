'use strict';

const createBtn = document.querySelector('.js-create-btn');
const cardResultElement = document.querySelector('.js-card-result');
const createdSection = document.querySelector('.js-created');

function handleCreateBtn(ev) {
  ev.preventDefault();
  console.log('Mis datos', getUserData());

  const url = 'https://profileawesome.herokuapp.com/card';
  const data = getUserData();

  fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Server response:', data);
      if (data.success === true) {
        cardResultElement.innerHTML = data.cardURL;
        cardResultElement.href = data.cardURL;
      } else {
        cardResultElement.innerHTML = data.error;
      }
    });
  createdSection.classList.remove('created--hidden');
}

createBtn.addEventListener('click', handleCreateBtn);
