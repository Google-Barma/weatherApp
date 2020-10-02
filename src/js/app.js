import refs from './refs';
import weatherApi from './weather-api';
import currentMainWeatherTemplate from '../templates/current-main-weather.hbs';
import dailyWeatherTemplate from '../templates/daily-weather-template.hbs';

function makeMainWeatherMarkup() {
  weatherApi.fetchCurrentLocationWeather().then(data => {
    const markup = currentMainWeatherTemplate(data);

    refs.mainWeatherBlock.innerHTML = '';
    refs.mainWeatherBlock.insertAdjacentHTML('beforeend', markup);
  });
}

function makeMainCityWeatherMarkup() {
  weatherApi.fetchSelectedCityWeather().then(data => {
    const markup = currentMainWeatherTemplate(data);

    refs.mainWeatherBlock.innerHTML = '';
    refs.mainWeatherBlock.insertAdjacentHTML('beforeend', markup);
  });
}

function makeGeo7DayWeatherMarkup() {
  weatherApi.fetchCurrentLocation7DayWeather().then(filteredWeather => {
    filteredWeather = filteredWeather.slice(1);
    console.log(filteredWeather);
    const markup = dailyWeatherTemplate(filteredWeather);
  });
}

function saveCityNameToLocalStorage(event) {
  const requestedCity = event.target.elements.query.value;
  localStorage.setItem('requestedCity', requestedCity);
}

refs.cityForm.addEventListener('submit', event => {
  event.preventDefault();

  saveCityNameToLocalStorage(event);

  makeMainCityWeatherMarkup();
});

makeMainWeatherMarkup(refs.mainWeatherBlock);
makeGeo7DayWeatherMarkup();
