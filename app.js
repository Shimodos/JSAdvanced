'use strict'; // strict mode

function getMyCoordinates() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        resolve({ latitude: coords.latitude, longitude: coords.longitude });
      },
      (error) => {
        reject(error);
      },
    );
  });
}

async function getMyCity() {
  try {
    const { latitude, longitude } = await getMyCoordinates();
    const response = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`,
    );
    if (!response.ok) {
      throw new Error('Failed to get city');
    }
    console.log(latitude, longitude);
    const data = await response.json();
    console.log(data.city);
  } catch (error) {
    console.error(error);
  }
}

getMyCity();
