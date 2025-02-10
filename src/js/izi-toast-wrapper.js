const commonOptions = {
  position: 'topCenter',
  pauseOnHover: true,
  closeOnClick: true,
  icon: '',
  close: false,
  timeout: 2000,
};

import iziToast from 'izitoast';

export function showError(message) {
  iziToast.error({
    message,
    progressBarColor: '#b51b1b',
    title: 'Error',
    ...commonOptions,
  });
}
