// import Accordion from 'accordion-js';

// console.log(document.querySelector('#about-me .accordion-container'));

// new Accordion('#about-me .accordion-container', {
// });



// Swiper

import { initSwiper } from './swiper-api';

const swiperOptions = {
  loop: true,
  navigation: {
    nextEl: ".btn-slide",
  },
  breakpoints: {
    320: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    1440: { slidesPerView: 6 },
  }
};

initSwiper({
  sectionId: 'about-me',
  useNavigation: true,
  additionalParams: swiperOptions,
});
