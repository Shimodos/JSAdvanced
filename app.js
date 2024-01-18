'use strict';

// таймер пици

function timerPizza(ms) {
  const end = new Date().getTime() + ms;
  const interval = setInterval(() => {
    console.log(
      new Intl.DateTimeFormat('uk-UA', {
        minute: 'numeric',
        second: 'numeric',
      }).format(end + 100 - new Date()),
    );
  }, 1000);

  setTimeout(() => {
    clearInterval(interval);
    console.log('Пицца готова!');
  }, ms);
}

timerPizza(5000);
