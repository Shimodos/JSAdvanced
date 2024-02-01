'use strict'; // strict mode

// Promise is a JavaScript object for asynchronous operation.
// Chain

fetch('https://dummyjson.com/products')
  .then((res) => {
    if (!res.ok) {
      throw new Error(`Is error ${res.status}`);
    }

    return res.json();
  })
  .then(({ products }) => {
    console.log(products);
    return fetch('https://dummyjson.com/products/' + products[0].id);
  })
  .then((res) => {
    if (!res.ok) {
      throw new Error(`Is error ${res.status}`);
    }
    res.json();
  })
  .then((data) => console.log(data))

  .catch((error) => {
    const el = document.querySelector('.filter');
    el.innerHTML = error.message;
  }) // error handling

  .finally(() => console.log('finally')); // finally
