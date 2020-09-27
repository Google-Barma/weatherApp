import weatherApi from './weatherApi';
import createWeatherMarkup from './createWeatherMarkup';

function getCurrentWeather() {
  weatherApi
    .fetchCurrentGeolocationWeather()
    .then(data => {
      createWeatherMarkup(data);
    })
    .catch(error => console.log(error));
}

setTimeout(() => {
  getCurrentWeather();
}, 1000);
