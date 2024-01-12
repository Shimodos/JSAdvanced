'use strict';

const weatherMap = new Map([
  ['rainy', 'Bring an umbrella'],
  ['sunny', 'Dress lightly'],
  ['cloudy', 'Go outside'],
  ['snowing', 'Wear boots'],
]);

console.log(weatherMap);

const weatherObj = {
  Valencia: 10,
  Madrid: 20,
  Barcelona: 30,
};

console.log(Object.entries(weatherObj));
const weatherMap2 = new Map(Object.entries(weatherObj));
console.log(weatherMap2);
