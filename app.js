'use strict';
const weatherMap = new Map();
weatherMap.set('Valencia', '13').set('Madrid', '10');

console.log(weatherMap.get('Valencia')); // 13
console.log(weatherMap.get('not found')); // undefined

console.log(weatherMap.has('Valencia')); // true
console.log(weatherMap.has('not found')); // false

console.log(weatherMap.delete('Valencia')); // true
weatherMap.clear(); // clears all the map

const arr = [1, 2, 3];
weatherMap.set(1, 5).set(true, 'yes').set(false, 'no').set(arr, 'array').set({ a: 1 }, 'object');

console.log(weatherMap);
console.log(weatherMap.size); // 5

console.log(weatherMap.get(arr));
console.log(weatherMap.get({ a: 1 })); // undefined
