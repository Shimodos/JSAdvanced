'use strict';

let weatherMap = new Map([
  ['Valencia', 10],
  ['Madrid', 20],
  ['Barcelona', 30],
]);

// меняем значение ключа и значения местами

const weatherMapInvert = new Map([...weatherMap].map(([key, value]) => [value, key]));

console.log(weatherMapInvert);

weatherMap = new Map([...weatherMap].map((el) => el.reverse()));
console.log(weatherMap);
