export default {
  apiKey: '&appid=e8a30fe387c8d6d768122e7ce2ffee5c',
  baseURL: 'api.openweathermap.org/data/2.5/weather',
  queryCityName: '',
  cityCurrentWeather: {},

  async fetchFetchCurrentWeatherInCity() {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${this.queryCityName}&units=metric&lang=ru&appid=e8a30fe387c8d6d768122e7ce2ffee5c`;
    try {
      const response = await fetch(url);
      const { weather, main, name, sys, timezone } = await response.json();

      this.cityCurrentWeather.currentTemp = Math.round(main.temp);
      this.cityCurrentWeather.maxTemp = Math.round(main.temp_max);
      this.cityCurrentWeather.minTemp = Math.round(main.temp_min);
      this.cityCurrentWeather.weatherDescription = weather[0].description;
      this.cityCurrentWeather.weatherDescriptionIcon = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

      console.log(this.cityCurrentWeather);

      return { weather, main, name, sys, timezone };
    } catch (error) {
      console.log(error);
    }
  },

  setCityNameToUrl(value) {
    this.queryCityName = value;
  },
};
