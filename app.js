'use strict'; // strict mode

// SOLID Principles

// Barbara Liskov - Substitutability Principle

class User {
  #role = 'user';

  getRole() {
    return this.#role;
  }
}

class Admin extends User {
  #role = ['user', 'admin'];

  getRole() {
    return this.#role.join(', '); // .join method returns a string from an array
  }
}

function logRole(user) {
  console.log('User role is: ' + user.getRole().toUpperCase());
}
logRole(new User());
logRole(new Admin());
