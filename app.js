'use strict'; // strict mode

console.log(document.head);
console.log(document.body);

const el = document.querySelector('.wrapper');
const el2 = document.querySelectorAll('meta');
console.log(el);
console.log(el2);
const el3 = document.getElementsByClassName('wrapper');
const el4 = document.getElementsByTagName('meta');
console.log(el3);
console.log(el4);

el.classList.add('new-class');

const button = document.createElement('button');
button.innerHTML = 'append';

const button2 = document.createElement('button');
button2.innerHTML = 'prepend';

el.append(button);
el.prepend(button2);
// el.after(button2);

function generate() {
  // console.log(el.parentNode.removeChild(el)); // remove element old way
  el.remove();
}
