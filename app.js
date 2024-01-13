'use strict';

console.log(Number('10'));
console.log(+'20');
console.log(Number.parseInt('15', 10));
console.log(Number.parseInt('15 sec', 10));

console.log(Number.parseFloat('15.5', 10));
console.log(Number.parseFloat('15.5 sec', 10));

console.log(Number.isNaN(Number('10der')));
console.log(Number.isNaN(10 / 0));
console.log(Number.isFinite(10 / 0));

console.log(Number.isInteger(10));
console.log(Number.isInteger(10.4));
