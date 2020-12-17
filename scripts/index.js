let editProfileButton = document.querySelector('.lead__button_type_edit');
let popupCloseButton = document.querySelector('.popup__close');
let title =  document.querySelector('.lead__title');
let subtitle =  document.querySelector('.lead__subtitle');
let form = document.querySelector('.form');
let fieldName = document.querySelector('.form__input_field_name');
let fieldDescription = document.querySelector('.form__input_field_description');
let overlay = document.querySelector('.overlay');

function open_form() {
  overlay.classList.toggle('overlay_active');
  fieldName.value = title.textContent;
  fieldDescription.value = subtitle.textContent;
}

function close_form() {
  overlay.classList.toggle('overlay_active');
}

function handleForm (evt) {

  evt.preventDefault();
  title.textContent = fieldName.value;
  subtitle.textContent = fieldDescription.value;
  document.querySelector('.lead__avatar').setAttribute('alt', fieldName.value + ', ' + fieldDescription.value);
  close_form();
}

/* Открытие PopUp */
editProfileButton.addEventListener('click', open_form);

/* Закрытие PopUp */
popupCloseButton.addEventListener('click', close_form);

/* Сохранение формы */
form.addEventListener('submit', handleForm);