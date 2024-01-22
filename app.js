'use strict'; // strict mode

/* реализовать класс пользователя, сосвойстыввами логин, пароль, почта
 */

class User {
  // private login;
  // private password;
  // private email;

  #login;
  #_password;
  #email;

  constructor(login, password, email) {
    this.#login = login;
    this.#password = password;
    this.#email = email;
  }

  set #password(pass) {
    this.#_password = pass.split('').reverse().join(''); // reverse password
  }

  get #password() {
    return this.#_password.split('').reverse().join('');
  }

  get login() {
    return this.#login;
  }

  get email() {
    return this.#email;
  }

  checkPassword(pass) {
    return this.#password === pass;
  }

  changePassword(oldPas, newPass) {
    if (!this.checkPassword(oldPas)) {
      return false;
    }
    this.#password = newPass;
    return true;
  }
}

const user = new User('Alex', '12345', 'w@w.com');
console.log(user);
console.log(user.checkPassword('12345'));
console.log(user.changePassword('12345', '54321'));
console.log(user);
console.log(user.email);
