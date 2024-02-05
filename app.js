'use strict'; // strict mode

class ProductRepository {
  async getProducts() {
    const response = await fetch('https://dummyjson.com/products');
    console.log(await response.json());
  }
}

const repo = new ProductRepository();
repo.getProducts();

const asyncArrowFunction = async () => {
  const response = await fetch('https://dummyjson.com/products');
  console.log(await response.json());
};

asyncArrowFunction();
