import Card from './Card.js';

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

const cardTemplate = document.querySelector('#card-template').content;
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
const imageCloseButton = popupImage.querySelector('.popup__close');
const addRecordButton = document.querySelector('.lead__button_type_add');
const popupNewRecord = document.querySelector('.popup-newRecord');
const newRecordCloseButton = popupNewRecord.querySelector('.popup__close');
const fieldImageName = popupNewRecord.querySelector('.form__input_field_image-name');
const fieldImageUrl = popupNewRecord.querySelector('.form__input_field_image-url');
const overlayNewRecord = document.querySelector('.overlay-newRecord');
const overlayProfile = document.querySelector('.overlay-profile');
const overlayImage = document.querySelector('.overlay-image');
const overlays = Array.from(document.querySelectorAll('.overlay'));

// initialCards.forEach(item => {
//   gallery.append(createCard(item.name, item.link));
// });
initialCards.forEach(item => {
  const card = new Card(item, '#card-template');
  const cardElement = card.getView();
  gallery.append(cardElement);
})


// editProfileButton.addEventListener('click', openProfile);
// formProfile.addEventListener('submit', editFormProfile);
// profileCloseButton.addEventListener('click',  () => closePopup(overlayProfile));
// addRecordButton.addEventListener('click', openNewRecord);
// newRecordCloseButton.addEventListener('click', () => closePopup(overlayNewRecord));
// formNewRecord.addEventListener('submit', addNewRecord);
// imageCloseButton.addEventListener('click',  () => closePopup(overlayImage));

// function openPopup(overlay) {
//   overlay.classList.add('overlay_active');
//   document.addEventListener('keydown', escape)
// }

// function closePopup(overlay) {
//   overlay.classList.remove('overlay_active');
//   document.removeEventListener('keydown', escape);
// }

// function openProfile() {
//   fieldName.value = title.textContent;
//   fieldDescription.value = subtitle.textContent;
//   openPopup(overlayProfile);
// }

// function editFormProfile(evt) {
//   evt.preventDefault();
//   title.textContent = fieldName.value;
//   subtitle.textContent = fieldDescription.value;
//   closePopup(overlayProfile);
// }

// function openNewRecord() {
//   const newRecordButton = formNewRecord.querySelector('.btn');
//   newRecordButton.classList.add('form__submit_state_disabled');
//   newRecordButton.disabled = true;
//   formNewRecord.reset();

//   openPopup(overlayNewRecord);
// }

// function addNewRecord(evt) {
//   evt.preventDefault();
//   gallery.prepend(createCard(fieldImageName.value, fieldImageUrl.value));
//   closePopup(overlayNewRecord);
// }

// function createCard(name = 'Место', link = 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg') {
//     const cardItem = cardTemplate.cloneNode(true);
//     const cardTrash = cardItem.querySelector('.card__button_icon_trash');
//     const cardLike = cardItem.querySelector('.card__button_icon_like');
//     const cardImage = cardItem.querySelector('.card__img');
    
//     cardTrash.addEventListener('click', removeCard);
//     cardLike.addEventListener('click', likeCard);
//     cardImage.addEventListener('click', () => getFullImage(link, name));
    

//     cardItem.querySelector('.card__title').textContent = name;
//     cardImage.src = link;
//     cardImage.alt = name;
//     return cardItem;
// }

// function removeCard(evt) {
//   evt.target.closest('.card').remove();
// }

// function likeCard(evt) {
//   evt.target.classList.toggle('card__button_icon_like-fill');
// }

// function getFullImage(link, name) {
//   popupImageSrc.src = link;
//   popupImageSrc.alt = name;
//   popupImageTitle.textContent = name;

//   openPopup(overlayImage);
// }

// function escape (evt) {
//   const overlayActive = document.querySelector('.overlay_active')
//   if (evt.key === 'Escape') {
//     closePopup(overlayActive);
//   }
// }

// overlays.forEach((item) => item.addEventListener('click', (evt) => {
//   if (evt.target.classList.contains('overlay')) {
//     item.classList.remove('overlay_active')
//     document.removeEventListener('keydown', escape)
//     }
// }))


export { popupImage, popupImageSrc, popupImageTitle };