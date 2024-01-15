'use strict';

// функция конвертации валют, принимает 3 параметра: сумма, валюта, валюта в которую конвертируем

function convertCurrency(amount, fromCurrency, toCurrency) {
  const allCurrencies = [
    { name: 'USD', rate: 1 },
    { name: 'EUR', rate: 1.1 },
    { name: 'UAH', rate: 1 / 30 },
  ];

  const initialCurrency = allCurrencies.find((currency) => currency.name === fromCurrency);
  if (!initialCurrency) {
    return null;
  }

  const convertCurrency = allCurrencies.find((currency) => currency.name === toCurrency);
  if (!convertCurrency) {
    return null;
  }

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: convertCurrency.name,
  }).format((amount * initialCurrency.rate) / convertCurrency.rate);
}

console.log(convertCurrency(100, 'USD', 'EUR'));
console.log(convertCurrency(100, 'USD', 'UAH'));
console.log(convertCurrency(100, 'EUR', 'UAH'));
console.log(convertCurrency(100, 'EUR', 'USD'));
