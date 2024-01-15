'use strict';

console.log(Math.sqrt(36)); // 6
console.log(Math.cbrt(27));
console.log(16 ** (1 / 4)); // 2

console.log(Math.sign(-10)); // -1
console.log(Math.sign(35)); // 1
console.log(Math.abs(-100)); // 100

console.log(Math.exp(1)); // 2.718281828459045

//min and max
console.log(Math.min(1, 2, 3, 4, 5, 6, 7, 8, 9)); // 1
console.log(Math.max(1, 2, 3, 4, 5, 6, 7, 8, 9)); // 9

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(Math.min(...arr)); // 1

//random

console.log(Math.trunc(Math.random() * 6) + 1); // 1 to 6
