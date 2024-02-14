'use strict'; // strict mode

const APP = {};

(function () {
  const a = 10;

  function add(f, s) {
    return f + s;
  }

  function sub(f, s) {
    return f - s;
  }

  APP.calc = {
    add,
    sub,
  };
})(); // IIFE
