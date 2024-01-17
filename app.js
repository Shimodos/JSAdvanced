'use strict';

const first = new Date(2024, 10, 4);
const second = new Date(2024, 10, 4);

console.log(first > second); // false
console.log(first == second); // false
console.log(first === second); // false

console.log(first.getTime() === second.getTime()); // true
console.log(first.getTime() == second.getTime()); // true
console.log(Number(first) === Number(second)); // true
console.log(+first === +second); // true
