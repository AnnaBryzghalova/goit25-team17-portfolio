import { fetchResponses, sendCooperationRequest } from './goit-api';
import { renderReviewItems } from './render-functions';
import { initSwiper } from './swiper-api';

const reviewsList = document.querySelector('#reviews .swiper-wrapper');
reviewsEntryPoint();

async function reviewsEntryPoint() {
  const rendered = await tryRenderReviews();
  if (rendered) {
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
  } else {
    document
      .querySelector('#reviews .side-arrows')
      .classList.add('visually-hidden');
  }
}

async function tryRenderReviews() {
  try {
    const response = await fetchResponses();
    reviewsList.innerHTML = renderReviewItems(response);
    return true;
  } catch (error) {
    console.error('Error fetching reviews:', error);
    reviewsList.innerHTML = '<li class="swiper-slide">Not found</li>';
    return false;
  }
}
