// core version + navigation + keyboard navigation
import Swiper from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';
// import Swiper and modules styles
// import 'swiper/css';
// import 'swiper/css/navigation';

export async function initSwiper(sectionId, loop) {
  const btnPrev = document.querySelector(`#${sectionId} .swiper-button-prev`);
  const btnNext = document.querySelector(`#${sectionId} .swiper-button-next`);
  const swiperParameters = {
    modules: [Navigation, Keyboard],
    direction: 'horizontal',
    spaceBetween: 16,
    navigation: {
      prevEl: btnPrev,
      nextEl: btnNext,
    },
    allowTouchMove: true,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    breakpoints: {
      320: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1440: { slidesPerView: 4 },
    },
    loop,
  };

  if (!loop) {
    swiperParameters.on = {
      init: function () {
        checkNavigationButtons(this);
      },
      slideChange: function () {
        checkNavigationButtons(this);
      },
    };
  }

  const swiper = new Swiper(`#${sectionId} .swiper`, swiperParameters);

  function checkNavigationButtons(swiper) {
    setDisabled(btnPrev, swiper.isBeginning);
    setDisabled(btnNext, swiper.isEnd);
  }

  function setDisabled(element, disabled) {
    if (element) {
      if (disabled) element.setAttribute('disabled', '');
      else element.removeAttribute('disabled');
    }
  }
}
