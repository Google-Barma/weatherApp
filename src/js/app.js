import weatherApi from './weatherApi';
import refs from './refs';

import createWeatherMarkup from './createWeatherMarkup';
import createHourlyWeatherTemplates from './createHourlyWeatherTemplates';

import Swiper from 'swiper';

import 'swiper/swiper-bundle.css';

refs.queryForm.addEventListener('submit', handleSubmitBtn);

function handleSubmitBtn(event) {
  event.preventDefault();

  getInputCity(event);
  getCurrentWeatherInCity();
}

function getInputCity(event) {
  const city = event.target.elements.query.value;
  weatherApi.setCityNameToUrl(city);
}

function getCurrentWeatherInCity() {
  weatherApi
    .fetchFetchCurrentWeatherInCity()
    .then(data => {
      const nodeName = refs.currentCityWeatherWrapper;
      const markup = createWeatherMarkup(data);

      addWeatherMarkupToHTML(markup, nodeName);
    })
    .catch(error => console.log(error));
}

function getCurrentGeolocationWeather() {
  let locCurrentWeaather = localStorage.getItem('currentWeather');
  locCurrentWeaather = JSON.parse(locCurrentWeaather);
  console.log(locCurrentWeaather);

  const nodeName = refs.currentCityWeatherWrapper;
  const markup = createWeatherMarkup(locCurrentWeaather);

  addWeatherMarkupToHTML(markup, nodeName);

  // weatherApi
  //   .fetchCurrentGeolocationWeather()
  //   .then(data => {
  //     const nodeName = refs.currentCityWeatherWrapper;
  //     const markup = createWeatherMarkup(data);

  //     addWeatherMarkupToHTML(markup, nodeName);
  //   })
  //   .catch(error => console.log(error));
}

function getCurrentGeolocationWeatherHourly() {
  weatherApi
    .fetchCurrentGeolocationWeatherhourly()
    .then(data => {
      const hourly = { ...data };
      console.log(hourly);
    })
    .catch(error => console.log(error));
}

function addWeatherMarkupToHTML(markup, nodeRef) {
  nodeRef.innerHTML = '';
  nodeRef.insertAdjacentHTML('beforeend', markup);
}

// поменять время
setTimeout(() => {
  getCurrentGeolocationWeather();
  getCurrentGeolocationWeatherHourly();
}, 2000);

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
