'use strict';

const product = { id: 1, name: 'Pen', count: 1, price: 100 };

const Basket = function () {
  this.products = [];
};

Basket.prototype.addProduct = function (product) {
  if (this.products.find((product) => product.id === product.id)) {
    return;
  }
  this.products.push(product);
};

Basket.prototype.increaseProduct = function (id) {
  const product = this.products.map((product) => {
    if (product.id === id) {
      product.count++;
      return product;
    }
    return product;
  });
};

Basket.prototype.decreaseProduct = function (id) {
  const product = this.products
    .map((product) => {
      if (product.id === id) {
        product.count--;
        return product;
      }
      return product;
    })
    .filter((product) => product.count > 0);
};

const basket = new Basket();

basket.addProduct(product);
basket.increaseProduct(1);
basket.increaseProduct(1);
basket.decreaseProduct(1);
basket.decreaseProduct(1);
basket.decreaseProduct(1);
basket.decreaseProduct(1);
console.log(basket);
