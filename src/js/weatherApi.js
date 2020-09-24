import refs from './js/refs';
import citiesQuery from './queryForm';

export default {
  apiKey: 'e8a30fe387c8d6d768122e7ce2ffee5c',
    baseURL: 'api.openweathermap.org/data/2.5/weather',
    options: {
      method:GET,
  }
  cityName: null,
    cityQuery: `${baseURL}?q=${cityName}&appid=${apiKey}`,
  
    async fetchCityWeather() {
        try {
            const response = await fetch(`cityQuery`, this.options)
            console.log(response);
        }
    } catch(error)
    {
        throw error;
    }
};

console.log(citiesQuery);

//   async fetchImages() {
//     try {
//       const response = await fetch(
//         `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${this.key}`,
//         this.options,
//       );
//       const { hits, total } = await response.json();
//       return { hits, total };
//     } catch (error) {
//       throw error;
//     }
//   },