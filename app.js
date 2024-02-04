'use strict'; // strict mode

// Event Loop


// Microtask Queue

const prom = new Promise((resolve, reject) => {
  console.log('Constructor')
  setTimeout(() => {
    resolve('Timer 1 resolved');
  }
  , 1000);
});
prom.then(data => console.log(data)); // Microtask 1
Promise.resolve('Instant').then(data => console.log(data)); // Microtask 1

Promise.reject( new Error('Error')).catch(err => console.log(err)); // Microtask 1