import { fetchResponses, sendCooperationRequest } from './goit-api';
import { renderReviewItems } from './render-functions';
import { initSwiper } from './swiper-api';
import { showError } from './izi-toast-wrapper';

const reviewsList = document.querySelector('#reviews .swiper-wrapper');

const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0,
};
const intersectionObserver = new IntersectionObserver(
  onIntersection,
  observerOptions
);

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

    reviewsList.style = 'justify-content: center';

    intersectionObserver.observe(reviewsList);
  }
}

async function tryRenderReviews() {
  try {
    const response = await fetchResponses();
    reviewsList.innerHTML = renderReviewItems(response);
    return true;
  } catch (error) {
    reviewsList.innerHTML = '<li class="swiper-slide">Not found</li>';
    return false;
  }
}

function onIntersection(entries) {
  for (const entry of entries) {
    if (entry.target == reviewsList && entry.isIntersecting) {
      intersectionObserver.unobserve(reviewsList);
      showError("Can't load reviews :(");
      return;
    }
  }
}
