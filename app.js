'use strict'; // strict mode

const wrapper = document.querySelector('.wrapper');
console.log(wrapper);

const inner = document.querySelector('.inner');
const button = document.querySelector('.button');
console.log(inner);

// Перелючение вниз по дереву
console.log(inner.childNodes);
console.log([...inner.children][0].classList);

// Перелючение вверх по дереву
console.log(inner.parentElement);
console.log(inner.parentNode);

// Поиск ближайшего родителя
console.log(button.closest('.wrapper'));

// Перелючение влево и вправо по дереву
console.log(button.previousElementSibling);
console.log(button.previousSibling);
console.log(button.nextElementSibling);
console.log(button.nextSibling);

// Перелючение вверх и вниз по дереву
console.log(button.parentElement.children);
