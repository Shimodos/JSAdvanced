'use strict'; // strict mode

// загрузка скрипта после загрузки DOM
document.addEventListener('DOMContentLoaded', function (e) {
  console.log('DOM fully loaded and parsed');
  console.log(e);
});

// загрузка скрипта после загрузки всех ресурсов
window.addEventListener('load', function (e) {
  console.log('load');
  console.log(e);
});

// // загрузка скрипта перед выгрузкой страницы
// window.addEventListener('beforeunload', function (e) {
//   e.preventDefault();
//   e.returnValue = '';
// });
