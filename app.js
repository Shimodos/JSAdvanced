'use strict'; // strict mode

/* Абстракиця vs Инкапсуляция
  - Назначение
  - Режисер
  - Актеры
  - Сценарий
  - Съемочная группа
*/

class Movie {
  #name;
  #actors;
  #director;
  rating;

  constructor(name, actors, director) {
    this.#name = name;
    this.#actors = actors;
    this.#director = director;
  }

  get name() {
    return this.#name;
  }

  get actors() {
    return this.#actors;
  }

  get director() {
    return this.#director;
  }
}

const movie = new Movie('Titanic', ['Leonardo DiCaprio', 'Kate Winslet'], 'James Cameron');

console.log(movie);
