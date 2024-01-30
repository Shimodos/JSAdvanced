'use strict'; // strict mode

// Asynchronous JavaScript and XML (AJAX)

// AJAX is a technique for accessing web servers from a web page.

//HTTP Requests
function req(id) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://dummyjson.com/carts/${id}`);
  request.send();

  request.addEventListener('load', function () {
    const data = JSON.parse(this.responseText);
    console.log(data);
  });
}
req(1);
req(2);
req(3);

console.log('end');

// Fetch API
// fetch('https://dummyjson.com/carts/1')
//   .then((res) => res.json())
//   .then((json) => console.log(json));
