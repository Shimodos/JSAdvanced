'use strict';

// set interval

const interval = setInterval(() => {
  console.log(new Date());
}, 1000);
console.log(interval);

const timer = setTimeout(() => {
  clearInterval(interval);
}, 5000);

console.log(interval);
console.log(timer);
