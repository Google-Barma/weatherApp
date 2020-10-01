const moment = require('moment');

export default {
  apiKey: 'e8a30fe387c8d6d768122e7ce2ffee5c',
  baseURL: 'api.openweathermap.org/data/2.5/weather',
  queryCityName: '',
  cityCurrentWeather: {},
  currentWeather: {},
  currentPosition: {},
  hoarly: {},

  async fetchFetchCurrentWeatherInCity() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.queryCityName}&units=metric&lang=ru&appid=${this.apiKey}`;

    try {
      const response = await fetch(url);
      const { weather, main, name, sys, timezone } = await response.json();

      this.getCurrentWeatherData(this.cityCurrentWeather, {
        weather,
        main,
        name,
      });

      return this.cityCurrentWeather;
    } catch (error) {
      alert('Нет такого города');
    }
  },

  async fetchCurrentGeolocationWeather() {
    // const url = `https://api.openweathermap.org/data/2.5/weather?lat=${this.currentPosition.latitude}&lon=${this.currentPosition.longitude}&units=metric&lang=ru&appid=e8a30fe387c8d6d768122e7ce2ffee5c`;

    const url =
      'https://raw.githubusercontent.com/Google-Barma/weatherApp/master/src/currentWeather.json';

    try {
      const response = await fetch(url);
      const { weather, main, name, sys, timezone } = await response.json();

      this.getCurrentWeatherData(this.currentWeather, {
        weather,
        main,
        name,
      });

      const currentWeather = JSON.stringify(this.currentWeather);
      localStorage.setItem('currentWeather', currentWeather);

      return this.currentWeather;
    } catch (error) {
      console.log(error);
    }
  },

  async fetchCurrentGeolocationWeatherhourly() {
    // const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${this.currentPosition.latitude}&lon=${this.currentPosition.longitude}&exclude=daily&units=metric&lang=ru&appid=e8a30fe387c8d6d768122e7ce2ffee5c`;

    const url =
      'https://raw.githubusercontent.com/Google-Barma/weatherApp/master/src/hourlyTemp.json';

    try {
      const response = await fetch(url);
      const data = await response.json();
      const hourlyData = data.hourly;
      this.hoarly.temp = hourlyData.map(item => Math.round(item.temp));
      this.hoarly.dt = hourlyData.map(item => item.dt);
      this.hoarly.weather = hourlyData.map(item => item.weather);
      return this.hoarly;
    } catch (error) {
      console.log(error);
    }
  },

  setCityNameToUrl(value) {
    this.queryCityName = value;
  },

  getCurrentWeatherData(position, { weather, main, name }) {
    position.currentTemp = Math.round(main.temp);
    position.maxTemp = Math.round(main.temp_max);
    position.minTemp = Math.round(main.temp_min);
    position.weatherDescription = weather[0].description;
    position.name = name;
    position.weatherDescriptionIcon = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
    position.dateNow = this.getNowDate();
    position.timeNow = this.getTimeNow();
  },

  getNowDate() {
    const now = moment().locale('ru');

    return now.format('dddd, DD MMMM');
  },

  getTimeNow() {
    const now = moment().locale('ru');

    return now.format(' h:mm');
  },
};
