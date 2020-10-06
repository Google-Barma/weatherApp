import Swiper from 'swiper';

import 'swiper/swiper-bundle.css';

const mySwiper = new Swiper('.swiper-container', {
  // my options
  effect: 'slide',
  slidesPerView: 3,
  // loopedSlides: 7,

  init: true,
  // Optional parameters
  // direction: 'horizontal',
  // loop: true,

  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  // },

  // // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },

  // // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});

export default mySwiper;
