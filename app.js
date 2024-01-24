'use strict'; // strict mode

const User = {
  init(email, pass) {
    this.email = email;
    this.pass = pass;
  },
  log() {
    console.log('User logged!');
  },
};

const user = Object.create(User);

User.log(); // User logged!
console.log(user); // {}
user.log(); // User logged!
user.init('w@w.com', '123456');
console.log(user);
console.log(user.__proto__ == User); // true

const admin = Object.create(user);
console.log(admin); // {}
