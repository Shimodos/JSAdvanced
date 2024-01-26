'use strict'; // strict mode

class Enemy {
  health;
  constructor(health) {
    this.health = health;
  }

  recieveDamage(damage) {
    this.health = this.health - damage;
    console.log(this.health);
  }
}

class Sword {
  #damage;
  constructor(damage) {
    this.#damage = damage;
  }

  hit(enemy) {
    enemy.recieveDamage(this.#damage);
  }
}

class Orc extends Enemy {
  constructor(health) {
    super(health);
  }

  recieveDamage(damage) {
    if (Math.random() > 0.5) {
      this.health = this.health - damage;
    }
    console.log(this.health);
  }
}

// const enemy = new Enemy(100);
const enemy = new Orc(100);
const sword = new Sword(10);

sword.hit(enemy);
sword.hit(enemy);
sword.hit(enemy);
