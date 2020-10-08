import refs from './refs';
import citySearchingListTemplate from '../templates/city-searching-list.hbs';

export default {
  city: null,

  async fetchCitiesName() {
    const url = `https://autocomplete.travelpayouts.com/places2?term=${this.city}&locale=ru&types[city]=country`;

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

  _handleOnClickListItem(event) {
    const selectedCityName = event.target.textContent;
    refs.citiesInput.value = selectedCityName;
  },

  _onClickListItem() {
    refs.citiesList.addEventListener('click', this._handleOnClickListItem, {
      once: true,
    });
  },

  clearCitiesList() {
    refs.citiesList.innerHTML = '';
  },
};
