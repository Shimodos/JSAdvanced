'use strict';

const date1 = new Date(2024, 10, 15);
const date2 = new Date(2025, 11, 15);
console.log(Number(date1));
console.log(Number(date2));
console.log(date2 - date1);

function getDateBetweenDates(date1, date2) {
  return (date2 - date1) / (1000 * 60 * 60 * 24);
}
console.log(getDateBetweenDates(date1, date2));
