import iziToast from 'izitoast';

const formCooperationEl = document.querySelector('.form-cooperation');

const createModal = (title, message) => {
  const modal = `
  <div class="cooperation-modal-backdrop js-cooperation-modal-backdrop" close>
    <div class="cooperative-modal">
      <button class="cooperation-modal__btn-close js-cooperation-modal__btn-close" type="button" close>
        <svg class="cooperation-modal__btn-close-icon js-cooperation-modal__btn-close-icon" width="22" height="22" close>
          <use href="../images/sprite.svg#icon-x-close" close></use>
        </svg>
      </button>
      <h2 class="cooperative-modal__title">${title}</h2>
      <p class="cooperative-modal__comment">${message}</p>
    </div>
  </div>
  `;
  document.body.insertAdjacentHTML('beforeend', modal);

  const onBtnCloseClick = event => {
    if (event.target.hasAttribute('close') || event.key === "Escape") {
      document.querySelector('.cooperation-modal-backdrop').remove();

      modalEL.removeEventListener('click', onBtnCloseClick);
    }
  };

  const modalEL = document.querySelector('.js-cooperation-modal-backdrop');
  modalEL.addEventListener('click', onBtnCloseClick);
  document.addEventListener('keydown', onBtnCloseClick);
};

const postForm = async user => {
  const fetchOptions = {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'content-type': 'application/json',
    },
  };

  const responce = await fetch(
    'https://portfolio-js.b.goit.study/api/requests',
    fetchOptions
  );

  if (!responce.ok) {
    throw new Error(responce.status);
  }

  return responce.json();
};

const onFormCooperativeSubmit = async event => {
  try {
    event.preventDefault();

    const { userEmail, userComment } = formCooperationEl;
    const user = {
      email: userEmail.value.trim(),
      comment: userComment.value.trim(),
    };

    const { title, message } = await postForm(user);

    createModal(title, message);

    formCooperationEl.reset();
  } catch (err) {
    iziToast.error({
      title: `Error: ${err.message}`,
      position: 'topRight',
    });
  }
};

formCooperationEl.addEventListener('submit', onFormCooperativeSubmit);
