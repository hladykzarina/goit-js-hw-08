const throttle = require('lodash.throttle');
import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('feedback-form'),
  input: document.querySelector('input'),
  textarea: document.querySelector('textarea'),
};

const storageKey = 'feedback-form-state';
const storageData = JSON.parse(localStorage.getItem(storageKey));

form.addEventListener('input', throttle(handlerOnInput, 500));

if (storageData) {
  form.elements.email.value = storageData.email;
  form.elements.message.value = storageData.message;
}

function handlerOnInput() {
  const userData = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };

  localStorage.setItem(storageKey, JSON.stringify(userData));
}

form.addEventListener('submit', handlerSubmit);

function handlerSubmit(event) {
  event.preventDefault();
  if (email.value === '' || message.value === '') {
    return alert('Please fill in all the fields!');
  }
  console.log(JSON.parse(localStorage.getItem(storageKey)));
  form.reset();
  localStorage.removeItem(storageKey);
}

function populateFormOutput() {
  const savedMessage = JSON.parse(localStorage.getItem(storageKey));
  if (savedMessage) {
    refs.input.value = savedMessage.email;
    refs.textarea.value = savedMessage.message;
  }
}
