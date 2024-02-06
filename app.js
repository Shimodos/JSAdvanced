'use strict'; // strict mode

function generate(event) {
  // выводим в консоль getBoundingClientRect
  console.log(event.target.getBoundingClientRect());

  console.log(`X offset: ${window.scrollX}`);
  console.log(`Y offset: ${window.scrollY}`);
  console.log(`clientWidth: ${document.documentElement.clientWidth}`);
  console.log(`clientHeight: ${document.documentElement.clientHeight}`);

  const el = document.querySelector('.down');
  const rect = el.getBoundingClientRect();

  window.scrollBy({
    left: window.scrollX + rect.left,
    top: window.scrollY + rect.top,
    behavior: 'smooth',
  });
}
