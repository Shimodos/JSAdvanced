'use strict';

// Prototype

const Book = function (title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.isRead = false;
};

Book.prototype.read = function () {
  this.isRead = true;
};

Book.prototype.cover = 'hardcover';

const lordOfTheRings = new Book('Lord of the Rings', 'J.R.R. Tolkien', 1937);
lordOfTheRings.read();

console.log(lordOfTheRings);
console.log(lordOfTheRings.cover);
console.log(lordOfTheRings.hasOwnProperty('cover'));
console.log(lordOfTheRings.hasOwnProperty('author'));

console.log(lordOfTheRings.__proto__);
console.log(lordOfTheRings.__proto__ === Book.prototype);
console.log(Book.prototype.constructor === Book);
console.log(Book.prototype.isPrototypeOf(lordOfTheRings));
