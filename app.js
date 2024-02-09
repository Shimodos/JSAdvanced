'use strict'; // strict mode

const wrapper = document.querySelector('.wrapper');

for (let i = 0; i < 10; i++) {
  const div = document.createElement('div');
  div.innerHTML = `User ID: ${i}`;
  div.setAttribute('data-id', i);
  // div.addEventListener('click', () => {
  //   console.log(`'Delete user ID: , ${i}`);
  // });
  wrapper.appendChild(div);
}

wrapper.addEventListener('click', (e) => {
  const i = e.target.getAttribute('data-id');
  console.log(`Delete user ID: ${i}`);
});
