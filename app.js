'use strict'; // strict mode

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr
  .map((a) => a * 2)
  .filter((a) => a > 10)
  .forEach((a) => console.log(a));
// chaining methods
console.log(arr);

class Wallet {
  balance = 0;

  add(sum) {
    this.balance += sum;
    return this;
  }

  remove(sum) {
    this.balance -= sum;
    return this;
  }
}

const wallet1 = new Wallet();
const res = wallet1.add(100).remove(56);

console.log(res);

class Builder {
  house = {};

  addRoof() {
    this.house.roof = 'Roof';
    return this;
  }

  addFloor() {
    this.house.floor = 'Floor';
    return this;
  }

  execute() {
    return this.house;
  }
}

const builder = new Builder().addFloor().addRoof().execute();

console.log(builder);
