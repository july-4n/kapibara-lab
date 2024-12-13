import {validateInputs} from './validate-inputs';

const URL = 'https://jsonplaceholder.typicode.com/posts';

const sendForm = (formId) => {
  const form = document.getElementById(formId);

  const sendData = (data) => {
    return fetch(URL, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => res.json());
  };

  const submitForm = () => {
    const formElems = form.querySelectorAll('input');
    const formData = new FormData(form);
    const formBody = Object.fromEntries(formData);
    const message = form.querySelector('[data-message="success"]');

    if (validateInputs(formElems)) {
      sendData(formBody)
          .then((data) => {
            message.classList.add('is-active');
            setTimeout(() => {
              message.classList.remove('is-active');
            }, 2000);

            formElems.forEach((input) => {
              input.value = '';
            });
          });
    }
  };

  try {
    form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      submitForm();
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
};

export {sendForm};
