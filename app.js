'use strict'; // strict mode

// SOLID Principles

// Dependency Inversion Principle

class DB {
  saveToDB(items) {
    console.log(`save to DB: ${items}`);
    // save to DB
  }
}

class MongoDB extends DB {
  saveToDB(items) {
    console.log(`save to MongoDB: ${items}`);
    // save to MongoDB
  }
}
class ToDoList {
  items = [1, 2, 3];
  db;
  constructor(db) {
    this.db = db;
  }

  saveToDB() {
    this.db.saveToDB(this.item);
    // save to DB
  }
}

const todoList1 = new ToDoList(new MongoDB());
todoList1.saveToDB();
const todoList2 = new ToDoList(new DB());
todoList2.saveToDB();
