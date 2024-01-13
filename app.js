'use strict';

const weatherMap = new Map([
  ['Valencia', 10],
  ['Madrid', 20],
  ['Barcelona', 30],
]);

for (const [key, value] of weatherMap) {
  console.log(key);
  console.log(value);
}

// конвертируем Map в Array

const weatherArray = [...weatherMap];
console.log(weatherArray);

console.log([...weatherMap.keys()]);
console.log([...weatherMap.values()]);
