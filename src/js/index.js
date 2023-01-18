// Для HTTP-запитів використана бібліотека axios.
// Використовується синтаксис async/await.

// Для повідомлень використана бібліотека notiflix.
// Код відформатований за допомогою Prettier.


import '../css/styles.css';

// // Підключаю notiflix сповіщєння https://github.com/notiflix/Notiflix#readme
// npm i notiflix
import Notiflix from 'notiflix';
// Notiflix.Notify.success('Sol lucet omnibus');
// Notiflix.Notify.failure('Qui timide rogat docet negare');
// Notiflix.Notify.warning('Memento te hominem esse');
// Notiflix.Notify.info('Cogito ergo sum');

// // Знаходжу HTML елементи:
const searchForm = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery-section');
const loadMoreButton = document.querySelector('.load-more');

// // Ф. генеруэ HTML рзмітку галереї
import { createGallEryList } from './gallery-list';

// // API для пошуку зображень, публічний сервіс Pixabay
import { request } from './pixabay';

// обробляю відповідь з бекенду
const requestFunction = query => {
  request(query)
    .then(function (response) {
      const items = response.data.hits;
      console.log('ARR items', items);

      // якщо бекенд повертає порожній масив
      if (items.length === 0){
        console.log('Array length 0');

      Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again.');
      }

      // Створюю галерею (якщо бекенд повертає повний масив)
      gallery.innerHTML = createGallEryList(items);
    })
    .catch(function (error) {
      console.log(error);
    });
  // .then(function () {
  //   // виконується завжди
  // });
};

// // Ловлю подію в формі пошуку і відправляю пошуковий запрос на бекенд
searchForm.addEventListener('submit', e => {
  // прибираю оновлення сторінки при сабміті
  e.preventDefault();

  // виймаю пошуковий запрос з події
  const query = e.target.querySelector('input').value;

  // відправляю пошуковий запрос на бекенд
  requestFunction(query);
});
