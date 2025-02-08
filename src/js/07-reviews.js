const reviewsList = document.querySelector('#reviews .swiper-wrapper');

import { fetchResponses, sendCooperationRequest } from './goit-api';
import { renderReviewItems } from './render-functions';
import { initSwiper } from './swiper-api';

try {
  const response = await fetchResponses();
  reviewsList.innerHTML = renderReviewItems(response);
  initSwiper('reviews', false);
} catch (error) {
  console.error('Error fetching reviews:', error);
  reviewsList.innerHTML = '<li class="swiper-slide">Not found</li>';
}
