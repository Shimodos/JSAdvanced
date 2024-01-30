'use strict'; // strict mode

// Asynchronous JavaScript and XML (AJAX)

// AJAX is a technique for accessing web servers from a web page.

//HTTP Requests

// const request = new XMLHttpRequest();
// request.open('GET', `https://dummyjson.com/products/`);
// request.send();

// request.addEventListener('load', function () {
//   const data = JSON.parse(this.responseText);
//   console.log(data);
// });

// высчитываем среднюю цену продуктов в массиве

const request = new XMLHttpRequest();
request.open('GET', `https://dummyjson.com/products/`);
request.send();

request.addEventListener('load', function () {
  const { products } = JSON.parse(this.responseText);
  console.log(products);
  const prices = products.map((el) => el.price);
  const average = prices.reduce((acc, el) => acc + el) / prices.length;
  console.log(average);
});
