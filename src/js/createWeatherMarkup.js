import currentWeatherTemplate from '../templates/currentWeather.hbs';
import weatherApi from './weatherApi';
import refs from './refs';

export default function createWeatherMarkup() {
  const markup = currentWeatherTemplate(weatherApi.cityCurrentWeather);

  refs.currentCityWeatherWrapper.insertAdjacentHTML('beforeend', markup);
}
