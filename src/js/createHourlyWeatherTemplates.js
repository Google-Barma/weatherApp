import refs from './refs';
import hourlyWeatherTemplate from '../templates/hourlyWeatherTemplate.hbs';

export default function createHourlyWeatherTemplates(weatherObj) {
  const markup = hourlyWeatherTemplate(weatherObj);
  refs.swipeContainer.innerHTML = '';
  refs.swipeContainer.insertAdjacentHTML('beforeend', markup);
}
