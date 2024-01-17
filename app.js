'use strict';

const now = new Date();
console.log(now);

console.log(new Date('2020-05-01'));
console.log(new Date('01/05/2020'));

//Месяцы начинаются с 0
console.log(new Date(2024, 10, 20)); // 20 ноября 2024 года
console.log(new Date(2024, 10, 20 + 100)); // 29 февраля 2025 года
console.log(new Date(0));
console.log(Date.now());
console.log(new Date(1 * 24 * 60 * 60 * 1000)); //

console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getTime());

console.log(new Date(now.setFullYear(2030)));
