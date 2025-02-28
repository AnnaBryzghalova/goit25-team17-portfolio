import { sendCooperationRequest } from './goit-api';
import { showError } from './izi-toast-wrapper';

const formCooperationEl = document.querySelector('.form-cooperation');
const cooperativeModalWindowEL = document.querySelector(
  '.js-cooperation-modal-backdrop'
);
const cooperativeModalContainEL = [
  ...cooperativeModalWindowEL.children[0].children,
];

const fillModalText = (title, message) => {
  let cooperativeModalTitleEl;
  let cooperativeModalCommentEl;

  cooperativeModalContainEL.forEach(el => {
    if (el.classList.contains('cooperative-modal__title')) {
      cooperativeModalTitleEl = el;
    } else if (el.classList.contains('cooperative-modal__comment')) {
      cooperativeModalCommentEl = el;
    }
  });

  cooperativeModalTitleEl.innerHTML = title;
  cooperativeModalCommentEl.innerHTML = message;
};

const disableScroll = () => {
  document.body.style.overflow = 'hidden';
};

const enableScroll = () => {
  document.body.style.overflow = '';
};

const onBtnCloseClick = event => {
  if (event.target.hasAttribute('data-close') || event.key === 'Escape') {
    cooperativeModalWindowEL.classList.remove('is-open');
    enableScroll();

    cooperativeModalWindowEL.removeEventListener('click', onBtnCloseClick);
    document.removeEventListener('keydown', onBtnCloseClick);
  }
};

const onFormCooperativeSubmit = async event => {
  try {
    event.preventDefault();

    const { userEmail, userComment } = formCooperationEl;
    const user = {
      email: userEmail.value.trim(),
      comment: userComment.value.trim(),
    };

    const { title, message } = await sendCooperationRequest(user);

    fillModalText(title, message);

    cooperativeModalWindowEL.classList.add('is-open');
    disableScroll();

    cooperativeModalWindowEL.addEventListener('click', onBtnCloseClick);
    document.addEventListener('keydown', onBtnCloseClick);

    formCooperationEl.reset();
  } catch (err) {
    showError('Something went wrong! Please try again later');
  }
};

formCooperationEl.addEventListener('submit', onFormCooperativeSubmit);
