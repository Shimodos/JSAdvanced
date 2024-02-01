'use strict'; // strict mode

// Promise is a JavaScript object for asynchronous operation.

function getData(url, errorMessage, method = 'GET') {
  return fetch(url).then((res) => {
    if (!res.ok) {
      throw new Error(`${errorMessage} ${res.status}`);
    }
    return res.json();
  });
}

getData('https://dummyjson.com/products', 'Can nits get products')
  .then(({ products }) => {
    console.log(products);
    return getData('https://dummyjson.com/products/' + products[0].id, 'Can nits get product');
  })
  .then((data) => console.log(data))
  .catch((errorMessage) => {
    const el = document.querySelector('.filter');
    el.innerHTML = errorMessage;
  }) // error handling

  .finally(() => console.log('finally')); // finally
