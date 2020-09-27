import weatherApi from './weatherApi';

function getCurrentWeather() {
  weatherApi
    .fetchCurrentGeolocationWeather()
    .then(data => {
      console.log(data);
      createWeatherMarkup(data);
    })
    .catch(error => console.log(error));
}

setTimeout(() => {
  getCurrentWeather();
}, 1000);
