'use strict';

let a = { a: 1 };
let b = { b: 1 };
const map = new WeakMap();
map.set(a, 'one');
map.set(b, 'two');
console.log(map);
console.log(map.get(a));
console.log(map.has(a));
console.log(map);

a = null;
setTimeout(() => {
  console.log(map);
}, 1000);

let cache = new WeakMap();

function getValue(obj) {
  if (!cache.has(obj)) {
    let value = 1; // сложные вычисления для value
    cache.set(obj, value);
  }
  return cache.get(obj);
}

const res = getValue(b);
console.log(res);
const res2 = getValue(b);
console.log(res2);
