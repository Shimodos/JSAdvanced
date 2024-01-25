'use strict'; // strict mode

const Book = function (title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
};

Book.prototype.buy = function () {
  console.log(`You bought: ${this.title}`);
}; // Добавили метод buy в прототип Book

const AudioBook = function (title, author, lenMin) {
  Book.call(this, title, author);
  this.lenMin = lenMin;
}; // Создали конструктор AudioBook

AudioBook.prototype = Object.create(Book.prototype); // Отнаследовались от Book и создали новый прототип
AudioBook.prototype.constructor = AudioBook; // Указали конструктор

AudioBook.prototype.log = function () {
  console.log(` ${this.title} - ${this.lenMin} minutes`);
}; // Добавили метод log в прототип AudioBook

const book1 = new Book('Book One', 'John Doe', '2013');
const audioBook1 = new AudioBook('Audio Book One', 'John Doe', 20 * 60);

book1.buy();
audioBook1.log();
console.log(book1);
console.log(audioBook1);

console.log(audioBook1 instanceof AudioBook);
console.log(audioBook1 instanceof Book);
