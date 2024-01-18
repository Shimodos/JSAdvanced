'use strict';

console.log(1);

const messages = ['Hello world!', 'js'];

const helloWorld = setTimeout(
  (message1, message2) => {
    console.log(2);
    console.log(message1);
    console.log(message2);
  },
  1000,
  ...messages,
);
// clearTimeout(helloWorld);

console.log(3);
