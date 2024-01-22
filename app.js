'use strict'; // strict mode

class Carr {
  #vin;
  speed;

  #changeVin() {
    console.log('VIN changed');
  }

  test() {
    // проверка доступа к приватным полям
    this.#changeVin('1234');
  }

  static #field = 3;

  static {
    this.#field = 4;
  }
}

const car = new Carr();
car.test();
