function renderReview({ _id, author, avatar_url, review }) {
  return `
  <div class="swiper-slide">
    <img
     src="${avatar_url}"
      alt="Reviewer ${_id} photo"
      loading="lazy">
    <h3 class="reviewer-name">${author}</h3>
    <p class="review">
      ${review}
    </p>
  </div>
  `;
}

export function renderReviewItems(reviews) {
  return reviews.map(renderReview).join('');
}
