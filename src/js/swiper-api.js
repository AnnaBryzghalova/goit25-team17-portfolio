// core version + navigation + keyboard navigation
import Swiper from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';

export function initSwiper({
  sectionId,
  useNavigation,
  additionalParams = null,
}) {
  const swiperParameters = {
    direction: 'horizontal',
    allowTouchMove: true,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    ...additionalParams,
  };

  swiperParameters.modules = useNavigation
    ? [Navigation, Keyboard]
    : [Keyboard];

  if (useNavigation) {
    const btnPrev = document.querySelector(`#${sectionId} .swiper-button-prev`);
    const btnNext = document.querySelector(`#${sectionId} .swiper-button-next`);

    swiperParameters.navigation = {
      prevEl: btnPrev,
      nextEl: btnNext,
    };
  }

  const swiper = new Swiper(`#${sectionId} .swiper`, swiperParameters);
}
