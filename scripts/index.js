let editProfileButton = document.querySelector('.lead__button_type_edit');
let popupCloseButton = document.querySelector('.popup__close');
let title =  document.querySelector('.lead__title');
let subtitle =  document.querySelector('.lead__subtitle');
let form = document.querySelector('.form');
let fieldName = document.querySelector('.form__input_field_name');
let fieldDescription = document.querySelector('.form__input_field_description');
let overlay = document.querySelector('.overlay');
let avatar = document.querySelector('.lead__avatar');

function openForm() {
  overlay.classList.toggle('overlay_active');
  fieldName.value = title.textContent;
  fieldDescription.value = subtitle.textContent;
}

function closeForm() {
  overlay.classList.toggle('overlay_active');
}

function handleForm (evt) {
  evt.preventDefault();
  title.textContent = fieldName.value;
  subtitle.textContent = fieldDescription.value;
  avatar.setAttribute('alt', fieldName.value + ', ' + fieldDescription.value);
  closeForm();
}

/* Открытие PopUp */
editProfileButton.addEventListener('click', openForm);
/* Закрытие PopUp */
popupCloseButton.addEventListener('click', closeForm);
/* Сохранение формы */
form.addEventListener('submit', handleForm);