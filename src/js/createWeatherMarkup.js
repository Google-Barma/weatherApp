import currentWeatherTemplate from '../templates/currentWeather.hbs';
import refs from './refs';

export default function createWeatherMarkup(weatherObj) {
  const markup = currentWeatherTemplate(weatherObj);
  refs.currentCityWeatherWrapper.innerHTML = '';
  refs.currentCityWeatherWrapper.insertAdjacentHTML('beforeend', markup);
}
