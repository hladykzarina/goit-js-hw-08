const throttle = require('lodash.throttle');
import throttle from 'lodash.throttle';
const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('input[name="email"]'),
  textarea: document.querySelector('textarea[name="message"]'),
};
const storageKey = 'feedback-form-state';

let formData = {};
populateFormOutput();
refs.form.addEventListener('input', throttle(handlerOnInput, 500));

function handlerOnInput(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(storageKey, JSON.stringify(formData));
}
refs.form.addEventListener('submit', handlerSubmit);
function handlerSubmit(evt) {
  evt.preventDefault();
  if (refs.input.value === '' || refs.textarea.value === '') {
    alert('Please, fill in all fields');
    return;
  }
  evt.currentTarget.reset();
  localStorage.removeItem(storageKey);
  console.log(formData);
  formData = {};
}
function populateFormOutput() {
  const savedMessage = localStorage.getItem(storageKey);
  if (savedMessage) {
    formData = JSON.parse(savedMessage) || {};
    refs.input.value = formData.email || '';
    refs.textarea.value = formData.message || '';
  }
}
