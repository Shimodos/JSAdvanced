'use strict'; // strict mode

const wrapper = document.querySelector('.wrapper');

async function getActivity() {
  const response = await fetch('http://www.boredapi.com/api/activity/');
  const data = await response.json();
  return data;
}

async function generate() {
  try {
    wrapper.innerHTML = '';
    const data = await Promise.all([getActivity(), getActivity(), getActivity()]);
    console.log(data);
    for (const el of data) {
      const element = document.createElement('div');
      element.innerHTML = `<h2>${el.activity}</h2>`;
      wrapper.appendChild(element);
    }
  } catch (error) {
    console.error(error);
  }
}
