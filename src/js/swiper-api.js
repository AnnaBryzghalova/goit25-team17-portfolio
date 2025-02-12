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
    grabCursor: true,
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
    swiperParameters.navigation = {
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next',
    };
  }

  const swiper = new Swiper(`#${sectionId} .swiper`, swiperParameters);
}
