'use strict'; // strict mode

// Promise is a JavaScript object for asynchronous operation.
fetch('https://dummyjson.com/products')
  .then((res) => res.json())
  .then(({ products }) => {
    console.log(products);
    return fetch('https://dummyjson.com/products/' + products[1].id);
  })
  .then((res) => res.json())
  .then((product) => console.log(product));
