'use strict'; // strict mode

// Event Loop

const prom = new Promise((resolve, reject) => {
  if ( new Date() < new Date('2024-06-20') ) {
    reject(new Error('Promise rejected'));
  }
  resolve('Promise resolved');
});

prom
    .then((res) => {console.log(res)})
    .catch((err) => {console.log(err)})

function timeout(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms * 1000)
  });
}

timeout(1)
    .then(() => {
      console.log('1 second passed')
      return timeout(1);
    })
    .then(() => {
      console.log('2 seconds passed')
      return timeout(1);
    })