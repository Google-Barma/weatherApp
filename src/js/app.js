const debounce = require('lodash.debounce');
import mySwiper from './swipe-slider';
import refs from './refs';
import weatherApi from './weather-api';
import citiesQueryApi from './cities-api';

function handleCitiesQuery(event) {
  citiesQueryApi.city = event.target.value;

  citiesQueryApi._makeCitiesQueryList();
}

function handleSubmitForm(event) {
  event.preventDefault();

  weatherApi.saveCityNameToLocalStorage(event);

  weatherApi.makeMainCityWeatherMarkup();

  citiesQueryApi.clearCitiesList();
}

//TODO продумать закрытие списка
window.addEventListener('click', event => {
  if (event.target !== 'UL') {
    citiesQueryApi.clearCitiesList();
  }
});

refs.citiesInput.addEventListener('input', debounce(handleCitiesQuery, 1500));
refs.cityForm.addEventListener('submit', handleSubmitForm);

weatherApi.makeMainWeatherMarkup(refs.mainWeatherBlock);
weatherApi.makeGeo7DayWeatherMarkup();

setTimeout(() => {
  mySwiper();
}, 300);
