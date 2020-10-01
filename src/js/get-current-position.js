export default function getCurrentPosition() {
  const option = {
    timeout: 5000,
  };

  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, option);
  });
}
