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

      this._onClickListItem();
    });
  },

  _onClickListItem() {
    refs.citiesList.addEventListener('click', event => {
      const selectedCityName = event.target.textContent;
      refs.citiesInput.value = event.target.textContent;

      //   localStorage.setItem('sectedCityName', selectedCityName);
    });
  },

  clearCitiesList() {
    refs.citiesList.innerHTML = '';
  },
};
