'use strict'; // strict mode

// SOLID Principles

// Single Responsibility Principle

class Character {
  #inventory = [];
  #health = 100;

  pickItem(item) {
    this.#inventory.push(item);
  }
  recieveDamage(damage) {
    this.#health -= damage;
  }
}

class DB {
  saveCharacter() {
    localStorage.setItem('character', JSON.stringify(this));
  }

  loadCharacter() {
    const character = JSON.parse(localStorage.getItem('character'));
  }
}

const character = new Character();

character.pickItem('sword');
character.pickItem('shield');
character.recieveDamage(10);

console.log(character);
