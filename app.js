'use strict'; // strict mode

// Arrow function

const asyncArrowFunction = async () => {
  try {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// console.log('1');
// asyncArrowFunction()
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error))
//   .finally(() => console.log('2'));

(async () => {
  console.log('1');
  const res = await asyncArrowFunction();
  console.log(res);
  console.log('2');
})();
