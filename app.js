'use strict'; // strict mode

// Event Loop

function myFetch(url) {
  return new Promise ((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.send();

    request.addEventListener('load', function() {
      if (this.status !== 200) {
        return reject(new Error(this.status));
      }
      resolve(this.responseText);
    });

    request.addEventListener('error', () => {
      reject(new Error(this.status));
    });

    request.addEventListener('timout', () => {
      reject(new Error('timout'));
    });
  });
}

myFetch('https://dummyjson.com/productss')
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });