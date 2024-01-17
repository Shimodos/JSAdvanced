'use strict';

// создать функцию, котороая принимает пользователя и проверяет если у него день рождения сегодня, то поздравляет его с днем рождения

const user = {
  name: 'Alex',
  birthday: '01/16/1990',
};

// const today = new Date();
// const todayDate = today.toISOString().slice(0, 10);

// function checkBirthday(user) {
//   if (user.birthday === todayDate) {
//     console.log(`Happy birthday, ${user.name}!`);
//   } else {
//     console.log(`Today is not ${user.name}'s birthday.`);
//   }
// }

// checkBirthday(user);

function checkBirthday(user) {
  const birthdayDate = new Date(user.birthday);
  const today = new Date();
  if (birthdayDate.getMonth() !== today.getMonth()) {
    console.log(`Today is not ${user.name}'s birthday.`);
  }
  if (birthdayDate.getDate() !== today.getDate()) {
    console.log(`Today is not ${user.name}'s birthday.`);
  }
  console.log(`Happy birthday, ${user.name}!`);
}

checkBirthday(user);
