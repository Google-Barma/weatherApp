import weatherApi from './weatherApi';

function getCurrentPosition() {
  const option = {
    timeout: 5000,
  };

  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, option);
  });
}

getCurrentPosition()
  .then(resolve => {
    weatherApi.currentPosition = resolve.coords;
    console.log(weatherApi.currentPosition);
  })
  .catch(error => console.log(error));
