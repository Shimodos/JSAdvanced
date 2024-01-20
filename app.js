'use strict';

const Book = function (title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
};

Book.prototype.read = function () {
  this.isRead = true;
};

class BookList {
  isRead = false;

  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }

  read() {
    this.isRead = true;
  }
}

const lordOfTheRings = new BookList('Lord of the Rings', 'J.R.R. Tolkien', 12345);

console.log(lordOfTheRings);
console.log(lordOfTheRings instanceof BookList);
lordOfTheRings.read();
console.log(lordOfTheRings.__proto__);
