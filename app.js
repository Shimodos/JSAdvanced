'use strict'; // strict mode

class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  } // Конструктор

  info() {
    console.log(`${this.title} was written by ${this.author} in ${this.year}`);
  }
}

const book1 = new Book('Book One', 'John Doe', '2013');
const book2 = new Book('Book Two', 'Jane Doe', '2016');

book1.info();
book2.info();

class EBook extends Book {
  constructor(title, author, year, type) {
    super(title, author, year);
    this.type = type;
  }

  info() {
    super.info(); // Вызов метода родителя
    console.log(`This is an ${this.type} book and was published in ${this.year}`);
  }
}

const ebook1 = new EBook('EBook One', 'John Doe', '2013', 'PDF');
ebook1.info();
