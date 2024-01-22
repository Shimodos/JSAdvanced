'use strict'; // strict mode

const task = {
  title: 'My Title',
  dueTo: new Date('2024/01/26'),

  get isOverdue() {
    return this.dueTo < Date.now();
  },

  set isOverdue(value) {
    if (!value) {
      this.dueTo = new Date();
    }
  },
};

console.log(task.isOverdue); // false
task.isOverdue = false;
console.log(task);

class Task {
  constructor(title, dueDate) {
    this.title = title;
    this.dueDate = dueDate;
  }

  get isOverdue() {
    return this.dueTo < Date.now();
  } // получаем значение свойства

  set dueDate(date) {
    if (date < new Date()) {
      return;
    }
    this._dueDate = date; // устанавливаем значение свойства
  }
}

const newTask = new Task('My Title', new Date('2024/01/26'));
console.log((newTask.dueDate = new Date('2024/02/02')));
console.log(newTask);
