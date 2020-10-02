import refs from './refs';
import weatherApi from './weather-api';
import citySearchingListTemplate from '../templates/city-searching-list.hbs';

const debounce = require('lodash.debounce');

const citiesQuery = {
  city: null,

  async fetchCitiesName() {
    const url = `http://autocomplete.travelpayouts.com/places2?term=${this.city}&locale=ru&types[city]=country`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      const cityNames = data.map(item => {
        const citiesObj = {};

        citiesObj.name = item.name;
        citiesObj.country = item.country_name;
        console.log(citiesObj);
        return citiesObj;
      });

      return cityNames;
    } catch {
      error => console.log(error);
    }
  },
};

refs.citiesInput.addEventListener('input', debounce(handleCitiesQuery, 1500));

function handleCitiesQuery(event) {
  citiesQuery.city = event.target.value;
  //   citiesQuery.fetchCitiesName();
  createCityList();
}

function createCityList() {
  citiesQuery.fetchCitiesName().then(data => {
    const markup = citySearchingListTemplate(data);
    refs.citiesList.innerHTML = '';
    refs.citiesList.insertAdjacentHTML('afterbegin', markup);
  });
}

export default citiesQuery;
