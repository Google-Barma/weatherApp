const moment = require('moment');
import getCurrentPosition from './get-current-position';

export default {
  apiKey: 'e8a30fe387c8d6d768122e7ce2ffee5c',
  baseURL: 'https://api.openweathermap.org/data/2.5/',
  lang: 'ru',
  currentCoords: {},
  selectedCity: null,
  units: 'metric',

  async fetchCurrentLocationWeather() {
    await this._setCurrentPosition();
    await this._getCurrentPosition();

    // const url = `${this.baseURL}weather?lat=${this.currentCoords.lat}&lon=${this.currentCoords.long}&units=metric&lang=${this.lang}&appid=${this.apiKey}`;

    const url =
      'https://raw.githubusercontent.com/Google-Barma/weatherApp/master/src/currentWeather.json';

    try {
      const response = await fetch(url);
      const { weather, main, name } = await response.json();

      return this._convertCurrentWeatherData({
        weather,
        main,
        name,
      });
    } catch (error) {
      alert('Нужна геолокация');
    }
  },

  async fetchSelectedCityWeather() {
    await this._getSelectedCity();

    // const url = `${this.baseURL}weather?q=${this.selectedCity}&units=metric&lang=${this.lang}&appid=${this.apiKey}`;

    const url =
      'https://raw.githubusercontent.com/Google-Barma/weatherApp/master/src/currentWeather.json';

    try {
      const response = await fetch(url);
      const { weather, main, name } = await response.json();

      return this._convertCurrentWeatherData({
        weather,
        main,
        name,
      });
    } catch (error) {
      alert('Нет такого города');
    }
  },

  async fetchCurrentLocation7DayWeather() {
    await this._getCurrentPosition();
    // const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${this.currentCoords.lat}&lon=${this.currentCoords.long}&units=${this.units}&lang=${this.lang}&exclude=current,minutely,hourly,alerts&appid=${this.apiKey}`;
    const url =
      'https://raw.githubusercontent.com/Google-Barma/weatherApp/master/src/dayli-7days-weather.json';

    try {
      const response = await fetch(url);
      const { daily } = await response.json();

      const filteredWeather = daily.map(item => {
        const { dt, temp, weather } = item;

        return { dt, temp, weather };
      });

      this._convert7DaysFilteredData(filteredWeather);

      return filteredWeather;
    } catch (error) {
      console.log('seven days: Нужна геолокация', error);
    }
  },

  _convertCurrentWeatherData({ weather, main, name }) {
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

  _convert7DaysFilteredData(data) {
    data.map(item => {
      item.time = moment.unix(item.dt).format('HH:mm');
      item.dt = moment.unix(item.dt).format('dddd, DD MMMM');
      item.temp.day = Math.round(item.temp.day);
      item.temp.min = Math.round(item.temp.min);
      item.temp.max = Math.round(item.temp.max);
      item.weatherDescription = item.weather[0].description;
      item.weatherDescriptionIcon = `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`;
    });
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

  _getSelectedCity() {
    let city = localStorage.getItem('requestedCity');

    this.selectedCity = city;
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
