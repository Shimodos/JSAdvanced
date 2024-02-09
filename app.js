'use strict'; // strict mode

const button = document.querySelector('.button');

const evenHandler = function (event) {
  console.log('Button clicked');
};

button.addEventListener('click', evenHandler);
button.addEventListener('click', (event) => {
  console.log('2nd event listener');
  button.removeEventListener('click', evenHandler);
});
