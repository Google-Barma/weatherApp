import refs from './refs';
import weatherApi from './weatherApi';
import createWeatherMarkup from './createWeatherMarkup';

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
      createWeatherMarkup(data);
    })
    .catch(error => console.log(error));
}
