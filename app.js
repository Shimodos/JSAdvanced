'use strict'; // strict mode

// Promise is a JavaScript object for asynchronous operation.
// Chain

fetch('https://dummyjson.com/products')
  .then(
    (res) => res.json(),
    // (error) => console.log('error1'),
  )
  .then(
    ({ products }) => {
      console.log(products);
      return fetch('https://dummyjson.com/products/' + products[1].id);
    },
    // (error) => console.log('error2'),
  )
  .then((res) => res.json())
  .then((product) => console.log(product))
  .catch((error) => console.log(error)); // error handling
