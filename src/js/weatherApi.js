export default {
  apiKey: '&appid=e8a30fe387c8d6d768122e7ce2ffee5c',
  baseURL: 'api.openweathermap.org/data/2.5/weather',
  options: {
    method: 'GET',
  },
  cityName: null,
  // cityQuery: `${cityName}`,

  async fetchCityWeather() {
    try {
      let response = await fetch(
        `api.openweathermap.org/data/2.5/weather?q=London&appid=e8a30fe387c8d6d768122e7ce2ffee5c`,
        this.options,
      );
      const data = response.json();
      console.dir(data);
    } catch (error) {
      throw error;
    }
  },
};

// {
// "coord": {
// "lon": 28.68,
// "lat": 50.26
// },
// "weather": [
// {
// "id": 803,
// "main": "Clouds",
// "description": "broken clouds",
// "icon": "04d"
// }
// ],
// "base": "stations",
// "main": {
// "temp": 295.03,
// "feels_like": 291.8,
// "temp_min": 295.03,
// "temp_max": 295.03,
// "pressure": 1012,
// "humidity": 36,
// "sea_level": 1012,
// "grnd_level": 986
// },
// "visibility": 10000,
// "wind": {
// "speed": 3.34,
// "deg": 172
// },
// "clouds": {
// "all": 57
// },
// "dt": 1600947280,
// "sys": {
// "country": "UA",
// "sunrise": 1600919697,
// "sunset": 1600963169
// },
// "timezone": 10800,
// "id": 686967,
// "name": "Zhytomyr",
// "cod": 200
// }
