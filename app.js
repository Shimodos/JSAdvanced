'use strict'; // strict mode

// Promise is a JavaScript object for asynchronous operation.

const res = fetch('https://jsonplaceholder.typicode.com/todos/1');
console.log(res); // pending

// Три состояния промиса: pending(ожидание) и fulfilled(выполнено) и rejected(отклонено)
