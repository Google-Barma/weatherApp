const moment = require('moment');

export default {
  apiKey: 'e8a30fe387c8d6d768122e7ce2ffee5c',
  // mainURL: `https://api.openweathermap.org/data/2.5/weather?lat=${}&lon=${}&units=metric&lang=ru&appid=${apiKey}`,

  async fetchCurrentLocationWeather() {
    // const url = `https://api.openweathermap.org/data/2.5/weather?lat=${this.currentPosition.latitude}&lon=${this.currentPosition.longitude}&units=metric&lang=ru&appid=e8a30fe387c8d6d768122e7ce2ffee5c`;

    const url =
      'https://raw.githubusercontent.com/Google-Barma/weatherApp/master/src/currentWeather.json';

    try {
      const response = await fetch(url);
      const { weather, main, name } = await response.json();

      return this.getCurrentWeatherData({
        weather,
        main,
        name,
      });
    } catch (error) {
      alert('Нет такого города');
    }
  },

  getCurrentWeatherData({ weather, main, name }) {
    const weatherData = {};
    weatherData.currentTemp = Math.round(main.temp);
    weatherData.maxTemp = Math.round(main.temp_max);
    weatherData.minTemp = Math.round(main.temp_min);
    weatherData.weatherDescription = weather[0].description;
    weatherData.name = name;
    weatherData.weatherDescriptionIcon = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
    weatherData.dateNow = this.getNowDate();
    weatherData.timeNow = this.getTimeNow();

    return weatherData;
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
