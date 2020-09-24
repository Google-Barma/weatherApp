export default {
  apiKey: '&appid=e8a30fe387c8d6d768122e7ce2ffee5c',
  baseURL: 'api.openweathermap.org/data/2.5/weather',
  options: {
    method: 'GET',
  },
  cityName: null,

  async fetchFetchCurrentWeatherInCity() {
    try {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&lang=ru&appid=e8a30fe387c8d6d768122e7ce2ffee5c`;
      const response = await fetch(url);
      const data = response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  },

  set setCityName(value) {
    this.cityName = value;
  },
};
