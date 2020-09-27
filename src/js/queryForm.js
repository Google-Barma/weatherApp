import refs from './refs';
import weatherApi from './weatherApi';
import createWeatherMarkup from './createWeatherMarkup';

refs.queryForm.addEventListener('submit', handleSubmitBtn);

function handleSubmitBtn(event) {
  event.preventDefault();

  getInputCity(event);
  getCurrentWeather();
}

function getInputCity(event) {
  const city = event.target.elements.query.value;
  weatherApi.setCityNameToUrl(city);
}

function getCurrentWeather() {
  weatherApi
    .fetchFetchCurrentWeatherInCity()
    .then(data => {
      weatherApi.currentCityWeather = data;
      console.log(weatherApi.currentCityWeather);
      createWeatherMarkup();
    })
    .catch(error => console.log(error));
}
