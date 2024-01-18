'use strict';

// event loop

const mark1 = performance.now();

setTimeout(() => {
  const mark2 = performance.now();
  console.log(`setTimeout: ${mark2 - mark1}`);
}, 1000);
