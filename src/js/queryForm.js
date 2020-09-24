import refs from './refs';
import weatherApi from './weatherApi';

refs.queryForm.addEventListener('submit', event => {
  event.preventDefault();

  weatherApi.cityName = event.target.elements.query.value;
  weatherApi
    .fetchCityWeather()
    .then(result => console.log(result))
    .catch(error => console.log(error));
});
