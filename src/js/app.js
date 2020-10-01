import getCurrentPosition from './get-current-position';
import weatherApi from './weather-api';
import currentMainWeather from '../templates/current-main-weather.hbs';

function makeMarkup() {
  weatherApi.fetchCurrentLocationWeather().then(data => {
    const markup = currentMainWeather(data);
  });
}

getCurrentPosition().then(data => {
  console.log(data);
});

makeMarkup();
