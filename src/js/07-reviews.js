const reviewsList = document.querySelector('#reviews .swiper-wrapper');

import { fetchResponses, sendCooperationRequest } from './goit-api';
import { renderReviewItems } from './render-functions';
import { initSwiper } from './swiper-api';

try {
  const response = await fetchResponses();
  reviewsList.innerHTML = renderReviewItems(response);

  const swiperParams = {
    spaceBetween: 16,
    breakpoints: {
      320: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1440: { slidesPerView: 4 },
    },
  };

  initSwiper({
    sectionId: 'reviews',
    useNavigation: true,
    additionalParams: swiperParams,
  });
} catch (error) {
  console.error('Error fetching reviews:', error);
  reviewsList.innerHTML = '<li class="swiper-slide">Not found</li>';
}
