'use strict'; // strict mode

const button = document.querySelector('.button');
const inner = document.querySelector('.inner');
const wrapper = document.querySelector('.wrapper');

button.addEventListener('click', function (event) {
  console.log('Button clicked');
  console.log(event.target);
  console.log(event.currentTarget);
  this.style.backgroundColor = 'red';
});

inner.addEventListener('click', function (event) {
  console.log('Inner clicked');
  console.log(event.target);
  console.log(event.currentTarget);
  this.style.backgroundColor = 'green';
  // event.stopPropagation(); // stop bubbling
});

wrapper.addEventListener(
  'click',
  function (event) {
    console.log('Wrapper clicked');
    console.log(event.target);
    console.log(event.currentTarget);
    this.style.backgroundColor = 'blue';
  },
  true,
); // capture phase
