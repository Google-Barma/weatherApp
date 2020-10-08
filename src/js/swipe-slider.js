import Swiper from 'swiper';

import 'swiper/swiper-bundle.css';

function mySwiper() {
  const mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 3,
    slidesPerGroup: 3,
    loop: true,
  });
}

export default mySwiper;
