// Для HTTP-запитів використана бібліотека axios.
// Використовується синтаксис async/await.

// Для повідомлень використана бібліотека notiflix.
// Код відформатований за допомогою Prettier.

import '../css/styles.css';

// // Знаходжу HTML елементи:
const searchForm = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery-section');
const loadMoreButton = document.querySelector('.load-more');


// // Для пошуку зображень використовую публічний API сервіс Pixabay
import {request} from './pixabay';

const requestFunction = (query) => {
  console.log('Query', query);

console.log(request(query));
  request(query)
  .then(function (response) {
    console.log(response.status);
    console.dir(response.data.hits[0]);
    console.log(response.data.hits[0]);
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
    // виконується завжди
  });
}


// // Ловлю подію в формі пошуку і відправляю пошуковий запрос на бекенд
searchForm.addEventListener('submit', (e)=>{
  e.preventDefault();

  const query = e.target.querySelector('input').value;
  console.log(query);

  requestFunction(query);
})











