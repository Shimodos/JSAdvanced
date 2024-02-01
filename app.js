'use strict'; // strict mode

// Promise is a JavaScript object for asynchronous operation.
// Chain

fetch('https://dummyjson.com/products/categories')
  .then((res) => res.json())
  .then((categories) => {
    console.log(categories);
    return fetch('https://dummyjson.com/products/categories/' + categories[1].id);
  });

function createSelect(arr) {
  const el = document.querySelector('.filter');
  el.innerHTML = `<select>
  ${arr.map((item) => `<option value=${el}>${item}</option>`)}
  </select>`;
}

function getCategories() {
  fetch('https://dummyjson.com/products/categories')
    .then((res) => res.json())
    .then((data) => createSelect(data))
    .catch((err) => console.log(`Error: ${err}`));
}

getCategories();
