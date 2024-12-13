import {formatInput} from './format-input';

const validateInputs = (list) => {
  let success = true;
  const regex = /^[а-яА-ЯЁёa-zA-Z]+$/;

  list.forEach((input) => {
    formatInput(input);
    if (regex.test(input.value)) {
      input.parentNode.classList.remove('error');
    } else {
      success = false;
      input.parentNode.classList.add('error');
    }
  });
  return success;
};

export {validateInputs};
