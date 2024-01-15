'use strict';

console.log(Math.round(1.6)); // 2

console.log(Math.ceil(1.1)); // 2

console.log(Math.floor(1.9)); // 1

console.log(Math.trunc(1.75)); // 1

console.log((1.6434).toFixed(2));
console.log(Number((1.6434).toFixed(2)));

//функция , которая принимает min и max и возвращает случайное число между ними  и округляет его

function randomInteger(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

console.log(randomInteger(1, 20));

// остаток от деления

console.log(5 % 2); // 1
console.log(4 % 2); // 0
console.log(3 % 2); // 1
console.log(2 % 2); // 0

// проверка на четность
const isEven = (n) => n % 2 === 0;
console.log(isEven(5)); // false
console.log(isEven(4)); // true
