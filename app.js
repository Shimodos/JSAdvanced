'use strict';

console.log('Hello World!');

const arrayUsers = ['Spain', 'London', 'London', 'USA', 'London', 'Spain', 'France', 'USA'];
console.log(arrayUsers);

const setFlights = new Set(arrayUsers); // Set структура данных, которая хранит уникальные значения
console.log(setFlights);

console.log(setFlights.size); // size - свойство, которое показывает количество элементов в Set

console.log(setFlights.has('London')); // has - метод, который проверяет наличие элемента в Set

setFlights.add('Italy'); // add - метод, который добавляет элемент в Set
console.log(setFlights);

setFlights.delete('Spain'); // delete - метод, который удаляет элемент из Set
console.log(setFlights);

// setFlights.clear(); // clear - метод, который очищает Set
console.log(setFlights);

// Перебор Set

for (let item of setFlights) {
  console.log(item);
}

const arrayFlights = [...setFlights]; // Преобразование Set в Array
console.log(setFlights);

const setObj = new Set([{ a: 1 }, { b: 2 }, { c: 3 }]);
console.log(setObj);
console.log(new Set({ a: 1 })); // Не работает, так как Set принимает только итерируемые значения
