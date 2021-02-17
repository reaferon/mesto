import Card from './Card.js';
import FormValidator from './FormValidator.js';

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const gallery = document.querySelector('.gallery__photos');
const editProfileButton = document.querySelector('.lead__button_type_edit');
const popupWithProfile = document.querySelector('.popup-profile');
const popupImage = document.querySelector('.popup-image');
const popupImageSrc = popupImage.querySelector('.popup-image__image');
const popupImageTitle = popupImage.querySelector('.popup-image__caption');
const fieldName = document.querySelector('.form__input_field_name');
const fieldDescription = document.querySelector('.form__input_field_description');
const title =  document.querySelector('.lead__title');
const subtitle =  document.querySelector('.lead__subtitle');
const formProfile = document.querySelector('.form');
const formNewRecord = document.querySelector('.form-newRecord');
const profileCloseButton = popupWithProfile.querySelector('.popup__close');
const addRecordButton = document.querySelector('.lead__button_type_add');
const popupNewRecord = document.querySelector('.popup-newRecord');
const newRecordCloseButton = popupNewRecord.querySelector('.popup__close');
const fieldImageName = popupNewRecord.querySelector('.form__input_field_image-name');
const fieldImageUrl = popupNewRecord.querySelector('.form__input_field_image-url');
const overlayNewRecord = document.querySelector('.overlay-newRecord');
const overlayProfile = document.querySelector('.overlay-profile');


const valudateFields = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__submit',
  activeButtonClass: 'form__submit',
  inactiveButtonClass: 'form__submit_state_disabled',
  inputErrorClass: 'form__error',
  errorClass: 'form__error_visible'
};

initialCards.forEach(item => {
  const card = new Card(item, '#card-template');
  const cardElement = card.getHtml();
  gallery.append(cardElement);
})

const editFormValidator = new FormValidator(valudateFields, formProfile);
editFormValidator.enableValidation();

const addFormValidator = new FormValidator(valudateFields, formNewRecord);
addFormValidator.enableValidation();

function openPopup(overlay) {
  overlay.classList.add('overlay_active');
  document.addEventListener('keydown', escape)
}

function closePopup(overlay) {
  overlay.classList.remove('overlay_active');
  document.removeEventListener('keydown', escape);
}

function openProfile() {
  fieldName.value = title.textContent;
  fieldDescription.value = subtitle.textContent;
  openPopup(overlayProfile);
}

function editFormProfile(evt) {
  evt.preventDefault();
  title.textContent = fieldName.value;
  subtitle.textContent = fieldDescription.value;
  closePopup(overlayProfile);
}

function openNewRecord() {
  const newRecordButton = formNewRecord.querySelector('.btn');
  newRecordButton.classList.add('form__submit_state_disabled');
  newRecordButton.disabled = true;
  formNewRecord.reset();

  openPopup(overlayNewRecord);
}

function addNewRecord(evt) {
  evt.preventDefault();
  const newRecord = { name: fieldImageName.value, link: fieldImageUrl.value };
  insertNewRecord(createCard(newRecord));
  closePopup(overlayNewRecord);
}

function insertNewRecord(card) {
  gallery.prepend(card);
}

function createCard(data) {
  const card = new Card(data, '#card-template');
  const cardElement = card.getHtml();
  return cardElement;
}

function escape (evt) {
  const overlayActive = document.querySelector('.overlay_active')
  if (evt.key === 'Escape') {
    closePopup(overlayActive);
  }
}

formProfile.addEventListener('submit', editFormProfile);
formNewRecord.addEventListener('submit', addNewRecord);
editProfileButton.addEventListener('click', openProfile);
formProfile.addEventListener('submit', formProfile);
profileCloseButton.addEventListener('click',  () => closePopup(overlayProfile));
addRecordButton.addEventListener('click', openNewRecord);
newRecordCloseButton.addEventListener('click', () => closePopup(overlayNewRecord));
formNewRecord.addEventListener('submit', addNewRecord);


export { popupImage, popupImageSrc, popupImageTitle };