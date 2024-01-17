'use strict';

const date = new Date();

console.log(date);
console.log(new Intl.DateTimeFormat('uk-UA').format(date));

const options1 = {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
  weekday: 'long',
};
console.log(new Intl.DateTimeFormat('uk-UA', options1).format(date));

const options2 = {
  year: '2-digit',
  month: 'long',
  day: 'numeric',
  weekday: 'short',
};
console.log(new Intl.DateTimeFormat('en-US', options2).format(date));
console.log(date.toISOString());

console.log(navigator.language); // 'uk-UA'
