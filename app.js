'use strict'; // strict mode

const wrapper = document.querySelector('.wrapper');
for (let i = 0; i < 100; i++) {
  const div = document.createElement('div');
  div.textContent = i;
  wrapper.appendChild(div);
}

function search(event) {
  const inputValue = event.target.value;
  for (const div of [...wrapper.children]) {
    if (div.textContent.includes(inputValue)) {
      div.classList.add('yellow');
      continue;
    }
    div.classList.remove('yellow');
  }
}
