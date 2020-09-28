import weatherApi from './weatherApi';
import createWeatherMarkup from './createWeatherMarkup';

function getCurrentWeather() {
  weatherApi
    .fetchCurrentGeolocationWeather()
    .then(data => {
      createWeatherMarkup(data);
    })
    .catch(error => console.log(error));

  weatherApi
    .fetchCurrentGeolocationWeatherOnSevenDay()
    .then(data => console.log(data))
    .catch(error => console.log(error));
}

// поменять время
setTimeout(() => {
  getCurrentWeather();
}, 1000);
