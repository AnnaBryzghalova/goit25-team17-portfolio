function renderReview({ _id, author, avatar_url, review }) {
  return `
  <li>
    <img src="${avatar_url}" alt="Reviewer ${_id} photo" />
    <h3 class="reviewer-name">${author}</h3>
    <p class="review">
      ${review}
    </p>
  </li>
  `;
}

export function renderReviewItems(reviews) {
  return reviews.map(renderReview).join('');
}
