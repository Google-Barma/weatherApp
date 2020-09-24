import refs from './refs';
import weatherApi from './weatherApi';

refs.queryForm.addEventListener('submit', handleSubmitBtn);

function handleSubmitBtn(event) {
  event.preventDefault();

  const city = event.target.elements.query.value;
  weatherApi.setCityName(city);

  getCurrentWeather();
}

function getCurrentWeather() {
  weatherApi
    .fetchFetchCurrentWeatherInCity()
    .then(data => {
      console.log(data);
    })
    .catch(error => console.log(error));
}
