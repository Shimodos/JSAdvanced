'use strict'; // strict mode

// Asynchronous JavaScript and XML (AJAX)

// высчитываем среднюю цену продуктов в массиве

const request = new XMLHttpRequest();
request.open('GET', `https://dummyjson.com/products/`);
request.send();

request.addEventListener('load', function () {
  const { products } = JSON.parse(this.responseText);
  console.log(products);

  const request = new XMLHttpRequest();
  request.open('GET', `https://dummyjson.com/products/` + products[0].id);
  request.send();

  request.addEventListener('load', function () {
    const data = JSON.parse(this.responseText);
    console.log(data);
  });
});
