const reviewsList = document.querySelector('ul.reviews');

import { fetchResponses, sendCooperationRequest } from './goit-api';
import { renderReviewItems } from './render-functions';
try {
  const response = await fetchResponses();
  reviewsList.innerHTML = renderReviewItems(response);
} catch (error) {
  console.log(error);
}

// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';

// init Swiper:
const swiper = new Swiper('.swiper', {
  // configure Swiper to use modules
  modules: [Navigation],
});
