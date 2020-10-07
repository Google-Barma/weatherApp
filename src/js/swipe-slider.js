import Swiper from 'swiper';

import 'swiper/swiper-bundle.css';

const mySwiper = new Swiper('.swiper-container', {
  slidesPerView: 3,
  //   spaceBetween: 30,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  // pagination: {
  //   el: '.swiper-pagination',
  //   clickable: true,
  // },
});

export default mySwiper;
