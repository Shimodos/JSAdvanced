'use strict'; // strict mode

async function getAllProducts() {
  const response = await fetch('http://dummyjson.com/products');
  return response.json();
}

async function getProduct(id) {
  const response = await fetch('http://dummyjson.com/products/' + id);
  return response.json();
}

async function main() {
  const { products } = await getAllProducts();
  const res = await Promise.all(
    products.map(async (product) => {
      return await getProduct(product.id);
    }),
  );
  console.log(res);
  // for (const product of products) {
  //   const res = await getProduct(product.id);
  //   console.log(res);
  // }
}

main();
