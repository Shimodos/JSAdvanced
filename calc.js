export function add(f, s) {
  return f + s;
}

export function sub(f, s) {
  return f - s;
}

// setTimeout(() => {
//   add = function (f, s) {
//     return f + s + 10;
//   };
// }, 1500);

async function getProducts() {
  const response = await fetch('https://dummyjson.com/products');
  return response.json();
}

// await getProducts().then((data) => console.log(data));
// console.log(await getProducts());

export const products = await getProducts();
