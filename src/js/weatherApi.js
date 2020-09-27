export default {
  apiKey: '&appid=e8a30fe387c8d6d768122e7ce2ffee5c',
  baseURL: 'api.openweathermap.org/data/2.5/weather',
  queryCityName: '',
  cityCurrentWeather: {},
  currentWeather: {},
  currentPosition: {},

  async fetchFetchCurrentWeatherInCity() {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${this.queryCityName}&units=metric&lang=ru&appid=e8a30fe387c8d6d768122e7ce2ffee5c`;

    try {
      const response = await fetch(url);
      const { weather, main, name, sys, timezone } = await response.json();

      this.getWeatherData(this.cityCurrentWeather, {
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
    const url = `http://api.openweathermap.org/data/2.5/weather?q=lat=${this.currentPosition.latitude}&lon=${this.currentPosition.longitude}&units=metric&lang=ru&appid=e8a30fe387c8d6d768122e7ce2ffee5c`;

    try {
      const response = await fetch(url);
      const { weather, main, name, sys, timezone } = await response.json();

      this.getWeatherData(this.cityCurrentWeather, {
        weather,
        main,
        name,
      });

      return this.currentWeather;
    } catch (error) {
      console.log(error);
    }
  },

  setCityNameToUrl(value) {
    this.queryCityName = value;
  },

  getWeatherData(position, { weather, main, name }) {
    position.currentTemp = Math.round(main.temp);
    position.maxTemp = Math.round(main.temp_max);
    position.minTemp = Math.round(main.temp_min);
    position.weatherDescription = weather[0].description;
    position.name = name;
    position.weatherDescriptionIcon = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
  },
};
