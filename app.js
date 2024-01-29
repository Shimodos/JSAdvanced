'use strict'; // strict mode

// SOLID Principles

// Open-Closed Principle

class Treasure {
  #value = 0;
}

class Coin extends Treasure {
  va1ue = 1;
}

class Crystal extends Treasure {
  value = 10;
}

class Brilliant extends Treasure {
  value = 100;
}

// Bad example (not closed for modification)
class Inventory {
  #score;
  pick(treasure) {
    this.#score += treasure.value;
  }
}
