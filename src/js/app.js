import refs from './refs';

import weatherApi from './weather-api';
import currentMainWeather from '../templates/current-main-weather.hbs';

function makeMainWeatherMarkup(position) {
  weatherApi.fetchCurrentLocationWeather().then(data => {
    const markup = currentMainWeather(data);

    refs.mainWeatherBlock.innerHTML = '';
    refs.mainWeatherBlock.insertAdjacentHTML('beforeend', markup);
  });
}

makeMainWeatherMarkup(refs.mainWeatherBlock);
