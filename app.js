'use strict';
let a = { x: 1 };
let b = { y: 2 };
const set = new WeakSet([a, b]);
a = null;
setTimeout(() => console.log(set), 1000);
