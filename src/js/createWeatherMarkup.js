import currentWeatherTemplate from '../templates/currentWeather.hbs';

export default function currentWeatherMarkup(weatherObj) {
  const markup = currentWeatherTemplate(weatherObj);
  return markup;
}
