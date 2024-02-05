'use strict'; // strict mode

async function main() {
  const res = await fetch('https://dummyjson.com/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0',
    },
    body: JSON.stringify({
      username: 'kminchelle',
      password: '0lelplR',
    }),
  });
  const data = await res.json();
  console.log(data);
}

main();
