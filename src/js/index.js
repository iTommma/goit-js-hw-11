import '../css/styles.css';
const DEBOUNCE_DELAY = 300;

// // встановити lodash.debounce https://www.npmjs.com/package/lodash.debounce
// $ npm i -g npm
// $ npm i --save lodash.debounce
// var debounce = require('lodash.debounce');

// // встановити notiflix https://github.com/notiflix/Notiflix#readme
// // $ npm i notiflix
import Notiflix from 'notiflix';

// // імпорт функцій проекту
import { fetchRestCountries } from './restcountries-api';
import { createCountryList } from './countries';
import { createCountryInfo } from './countries';

// // елементи HTML
const elSearchBox = document.querySelector('#search-box');
const elCountryList = document.querySelector('.country-list');
const elCountryInfo = document.querySelector('.country-info');

// // обробляю подію
function onSearchBoxInput (event) {
  // event.preventDefault();

  // // забираємо зн. з поля вводу
  const searchedQuery = elSearchBox.value.trim();
  console.log(searchedQuery);

  // // запит на сервер
  fetchRestCountries(searchedQuery)
    .then(data => {
      // console.dir(data);

      // // перевіряю що віддає сервер
      // // якщо 1 країну ствоюрюю картку країни
      if (data.length === 1) {
        console.log('LENGTH 1');
        elCountryList.innerHTML = '';
        elCountryInfo.innerHTML = createCountryInfo(data);
        return;
      }
      // // якщо список до 10 країн створюю HTML список країн
      if (data.length < 10) {
        console.log('ARR LENGTH < 10');
        elCountryInfo.innerHTML = '';
        elCountryList.innerHTML = createCountryList(data);
        return;
      }
      // // якщо список більше 10 країн
      console.log('ARR LENGTH > 10');
      elCountryList.innerHTML = '';
      elCountryInfo.innerHTML = '';
      Notiflix.Notify.info(
        'Too many matches found. Please enter a more specific name.'
      );
      return;
    })
    .catch(err => {
      console.log('catch', err);
      elCountryList.innerHTML = '';
      elCountryInfo.innerHTML = '';
      Notiflix.Notify.failure('Oops, there is no country with that name');
    });
};

// // ловлю подію в полі пошуку
// elSearchBox.addEventListener(
//   'input',
//   debounce(event => {
//     onSearchBoxInput(event);
//   }, DEBOUNCE_DELAY)
// );