'use strict';

const User = function (email, pass) {
  this.email = email;
  this.pass = pass;
};

const user1 = new User('a@a.ua', '123'); // user1 is an object
console.log(user1);
const user2 = new User('b@b.ua', '321'); // user2 is an object
console.log(user2);

console.log(user2 instanceof User); // true

// Создаеться пустой объект
// Вызываеться функция User
// this = пустой объект
// Обьект связываеться с User.prototype
// Функция возвращает объект
