import weatherApi from './weatherApi';
import createWeatherMarkup from './createWeatherMarkup';
// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/swiper-bundle.css';
// // core version + navigation, pagination modules:
// import Swiper, { Navigation, Pagination } from 'swiper';

// // configure Swiper to use modules
// Swiper.use([Navigation, Pagination]);

function getCurrentWeather() {
  weatherApi
    .fetchCurrentGeolocationWeather()
    .then(data => {
      createWeatherMarkup(data);
    })
    .catch(error => console.log(error));

  weatherApi
    .fetchCurrentGeolocationWeatherOnDaily()
    .then(data => {
      // console.log(data);
      // console.log(data.dt);
    })
    .catch(error => console.log(error));
}

// поменять время
setTimeout(() => {
  getCurrentWeather();
}, 1000);

//swiper
const mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  spaceBetween: 2,

  effect: 'cube',

  // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
