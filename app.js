'use strict'; // strict mode

// Modern async/await syntax JavaScript

function getProduct () {
  fetch('https://dummyjson.com/products/')
      .then(response => response.json())
      .then(data => console.log(data))
}

getProduct()
console.log('End')

// Async/Await syntax

 async function getProduct1 () {
  let productsResponse = await fetch('https://dummyjson.com/products/')
  let { products } = await productsResponse.json()
  console.log(products)

   const cartsResponse = await fetch('https://dummyjson.com/carts/')
   const carts = await cartsResponse.json()
   console.log(carts)

   let productResponse = await fetch('https://dummyjson.com/products/' +products[0].id)
   let product = await productResponse.json()
   console.log(product)
}
getProduct1().then(() => console.log('End1'))