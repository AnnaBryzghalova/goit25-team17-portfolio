import iziToast from 'izitoast';

const formCooperationEl = document.querySelector('.form-cooperation');

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
    console.log(title);
    console.log(message);
  } catch (err) {
    iziToast.error({
      title: `Error: ${err.message}`,
      position: 'topRight',
    });
  }
};

formCooperationEl.addEventListener('submit', onFormCooperativeSubmit);
