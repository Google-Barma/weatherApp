import refs from './refs';
import weatherApi from './weatherApi';

refs.queryForm.addEventListener('submit', event => {
  event.preventDefault();

  weatherApi.cityName = event.target.elements.query.value;
});

export default citiesQuery;
