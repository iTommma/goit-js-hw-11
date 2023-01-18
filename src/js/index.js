// Для HTTP-запитів використана бібліотека axios.
// Використовується синтаксис async/await.

// Для повідомлень використана бібліотека notiflix.
// Код відформатований за допомогою Prettier.

import '../css/styles.css';
// // Підключаю notiflix сповіщєння https://github.com/notiflix/Notiflix#readme
// npm i notiflix

// // Знаходжу HTML елементи:
const searchForm = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery-section');
const loadMoreButton = document.querySelector('.load-more');

// // Створюю HTML рзмітку галереї
import { createGallEryList } from './gallery-list';

// // Для пошуку зображень використовую публічний API сервіс Pixabay
import { request } from './pixabay';

// обробляю відповідь з бекенду
const requestFunction = query => {
  request(query)
    .then(function (response) {
      console.log(response.data.hits[0]);

      // Створюю галерею
      gallery.innerHTML = createGallEryList(response.data.hits);
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
