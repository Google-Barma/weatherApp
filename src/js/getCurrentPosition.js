import weatherApi from './weatherApi';

function getCurrentPosition() {
  const option = {
    timeout: 5000,
  };

  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, option);
  });
}

//можно показывать погоду по координатам из локал диска, а если координаты отличаются, то догружать потом по новым координатам
getCurrentPosition()
  .then(resolve => {
    weatherApi.currentPosition = resolve.coords;
  })
  .catch(error => {
    console.log(error);
  });
