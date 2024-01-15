'use strict';

const bigNum1 = 350500000;
const bigNum2 = 350_500_000;

const payment = 20_10;

console.log(Number('20_10')); // NaN
console.log(Number('2010')); // 2010
console.log(Number.parseInt('20_10'));
console.log(Number.parseFloat('20_10'));
