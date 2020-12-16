/* Изменение состояний по событиям Like/Dislike */
let card__likes = document.querySelectorAll(".card__like");

for (var i = 0; i < card__likes.length; i++) {
  card__likes[i].addEventListener('click', function() {
    this.classList.toggle('card__like_active');
  });
}

/* Открытие PopUp */
document.querySelector('.lead__button_type_edit').addEventListener('click', function() {

  let title =  document.querySelector('.lead__title').textContent;
  let subtitle =  document.querySelector('.lead__subtitle').textContent;

  document.querySelector('.overlay').classList.toggle('overlay_active');
  document.querySelector('.form__input_field_name').value = title;
  document.querySelector('.form__input_field_description').value = subtitle;
});

/* Закрытие PopUp */
document.querySelector('.popup__close').addEventListener('click', function() {
  document.querySelector('.overlay').classList.toggle('overlay_active');
});

/* Сохранение формы */
let form = document.querySelector('.form');

function handleForm (evt) {

  evt.preventDefault();

  let nameInput = document.querySelector('.form__input_field_name');
  nameInput.classList.remove('input_error');
  let descriptionInput = document.querySelector('.form__input_field_description');
  descriptionInput.classList.remove('input_error');

  if(nameInput.value === '' || descriptionInput.value === '') {
    if(nameInput.value === '') {
      nameInput.classList.add('input_error');
    }
    if(descriptionInput.value === '') {
      descriptionInput.classList.add('input_error');
    }
  } else {
    document.querySelector('.lead__title').textContent = nameInput.value;
    document.querySelector('.lead__subtitle').textContent = descriptionInput.value;
    document.querySelector('.lead__avatar').setAttribute('alt', nameInput.value + ', ' + descriptionInput.value);
    document.querySelector('.overlay').classList.toggle('overlay_active');
  }

}
form.addEventListener('submit', handleForm);

/* Изменение состояний PopUp */
document.querySelector('.lead__button_type_add').addEventListener('click', function() {
  console.log('Действие не предусмотрено');
});