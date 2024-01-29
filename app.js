'use strict'; // strict mode

// SOLID Principles

// Interface Segregation Principle

class Weapon {
  cost;

  dealDamage() {
    // deal damage
  }
}

class Riffle extends Weapon {
  shoot() {
    this.dealDamage();
    // shoot
  }
}

class Knife extends Weapon {
  strike() {
    this.dealDamage();
    // strike
  }
}
