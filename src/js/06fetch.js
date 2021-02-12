'use strict';

const createBtn = document.querySelector('.js-createBtn');
const cardResultElement = document.querySelector('.js-cardResult');

function handleCreateBtn(ev) {
  ev.preventDefault();
  console.log('Mis datos', getUserData());

  const url = 'https://profileawesome.herokuapp.com/card';
  const data = getUserData();

  fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Server response:', data);
      if (data.success === true) {
        cardResultElement.innerHTML = data.cardURL;
      } else {
        cardResultElement.innerHTML = data.error;
      }
    });
}

createBtn.addEventListener('click', handleCreateBtn);
