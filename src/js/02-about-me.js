import Accordion from 'accordion-js';

new Accordion('#about-me .accordion', {
  duration: 600,
  showMultiple: true,
  openOnInit: [0],
});

// Swiper

import { initSwiper } from './swiper-api';

const swiperParams = {
  loop: true,
  //  loopedSlides: 2,
  breakpoints: {
    320: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    1440: { slidesPerView: 6 },
  },
};

initSwiper({
  sectionId: 'about-me',
  useNavigation: true,
  additionalParams: swiperParams,
});
