'use strict';

const Book = function (title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
};

Book.prototype.isRead = false;

const lordOfTheRings = new Book('The Lord of the Rings', 'J.R.R. Tolkien', '9780261103252');

console.log(lordOfTheRings);
console.log(lordOfTheRings.isRead);

console.log(Book.prototype.__proto__);
console.log(lordOfTheRings.hasOwnProperty('isbn'));
