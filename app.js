'use strict';

// max safe integer
const max = 2 ** 53 - 1;
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991
console.log(max + 1);
console.log(max + 2);
console.log(max + 3);
console.log(max + 5);

console.log(12121212432534645756756867987808909n);
console.log(BigInt(12121212432534645756756867987808909));
console.log(BigInt('12121212432534645756756867987808909'));

console.log(10n - 4n); // 6n

console.log(5n + BigInt(10)); // 15n

console.log(5n * BigInt(2)); // 10n

console.log(5n < 2n); // false

console.log(5n > 2); // true

console.log(5n == 5); // true

console.log(5n === 5); // false

console.log(5n == '5'); // true

console.log(5n === '5'); // false

console.log(10 / 3); // 3.3333333333333335

console.log(10n / 3n); // 3n
