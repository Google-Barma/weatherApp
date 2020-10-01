const moment = require('moment');
import getCurrentPosition from './get-current-position';

export default {
  apiKey: 'e8a30fe387c8d6d768122e7ce2ffee5c',
  baseURL: 'https://api.openweathermap.org/data/2.5/',
  currentCoords: {},

  async fetchCurrentLocationWeather() {
    await this._setCurrentPosition();
    await this._getCurrentPosition();

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${this.currentCoords.lat}&lon=${this.currentCoords.long}&units=metric&lang=ru&appid=e8a30fe387c8d6d768122e7ce2ffee5c`;

    // const url =
    //   'https://raw.githubusercontent.com/Google-Barma/weatherApp/master/src/currentWeather.json';

    try {
      const response = await fetch(url);
      const { weather, main, name } = await response.json();

      return this._getCurrentWeatherData({
        weather,
        main,
        name,
      });
    } catch (error) {
      alert('Нет такого города');
    }
  },

  _getCurrentWeatherData({ weather, main, name }) {
    const weatherData = {};
    weatherData.currentTemp = Math.round(main.temp);
    weatherData.maxTemp = Math.round(main.temp_max);
    weatherData.minTemp = Math.round(main.temp_min);
    weatherData.weatherDescription = weather[0].description;
    weatherData.name = name;
    weatherData.weatherDescriptionIcon = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
    weatherData.dateNow = this._getNowDate();
    weatherData.timeNow = this._getTimeNow();

    return weatherData;
  },

  _setCurrentPosition() {
    getCurrentPosition().then(data => {
      let coordsData = {
        lat: data.coords.latitude,
        long: data.coords.longitude,
      };

      //save coords to localeStorage
      coordsData = JSON.stringify(coordsData);
      localStorage.setItem('currentCoords', coordsData);
    });
  },

  _getCurrentPosition() {
    let coords = localStorage.getItem('currentCoords');
    coords = JSON.parse(coords);

    this.currentCoords = coords;
  },

  _getNowDate() {
    const now = moment().locale('ru');

    return now.format('dddd, DD MMMM');
  },

  _getTimeNow() {
    const now = moment().locale('ru');

    return now.format(' h:mm');
  },
};
