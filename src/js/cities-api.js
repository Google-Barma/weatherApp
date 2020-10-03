import refs from './refs';
import weatherApi from './weather-api';
import citySearchingListTemplate from '../templates/city-searching-list.hbs';

export default {
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

  _makeCitiesQueryList() {
    this.fetchCitiesName().then(data => {
      const markup = citySearchingListTemplate(data);

      refs.citiesList.innerHTML = '';
      refs.citiesList.insertAdjacentHTML('afterbegin', markup);
    });
  },

  onClickListItem() {
    const listItem = document.querySelector('.js-cities-item');
    listItem.addEventListener('click', event => {
      console.log(event.target);
    });
  },

  clearCitiesList() {
    refs.citiesList.innerHTML = '';
  },
};
