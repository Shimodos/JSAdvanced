'use strict'; // strict mode

// Modern async/await syntax JavaScript

function getProduct() {
  fetch('https://dummyjson.com/products/')
    .then((response) => response.json())
    .then((data) => console.log(data));
}

getProduct();
console.log('End');

// Async/Await syntax

async function getProduct1() {
  try {
    const productsResponse = await fetch('https://dummyjson.com/products/');
    if (!productsResponse.ok) {
      throw new Error(productsResponse.status);
    }
    const { products } = await productsResponse.json();
    console.log(products);

    const cartsResponse = await fetch('https://dummyjson.com/carts/');
    const carts = await cartsResponse.json();
    console.log(carts);

    let productResponse = await fetch('https://dummyjson.com/products/' + products[0].id);
    let product = await productResponse.json();
    console.log(product);
  } catch (error) {
    console.log(error);
  } finally {
    console.log('Finally');
  }
}

try {
  const a = 5;
  a = 6;
} catch (error) {
  console.log(error);
}

getProduct1().then(() => console.log('End1'));
