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
let cardTemplate = document.querySelector('#card-template').content;
let gallery = document.querySelector('.gallery__photos');
let editProfileButton = document.querySelector('.lead__button_type_edit');
let popupWithProfile = document.querySelector('.popup-profile');
let popupImage = document.querySelector('.popup-image');
let popupImageSrc = popupImage.querySelector('.popup-image__image');
let popupImageTitle = popupImage.querySelector('.popup-image__caption');
let fieldName = document.querySelector('.form__input_field_name');
let fieldDescription = document.querySelector('.form__input_field_description');
let title =  document.querySelector('.lead__title');
let subtitle =  document.querySelector('.lead__subtitle');
let formProfile = document.querySelector('.form');
let formNewRecord = document.querySelector('.form-newRecord');
let profileCloseButton = popupWithProfile.querySelector('.popup__close');
let imageCloseButton = popupImage.querySelector('.popup__close');
let addRecordButton = document.querySelector('.lead__button_type_add');
let popupNewRecord = document.querySelector('.popup-newRecord');
let newRecordCloseButton = popupNewRecord.querySelector('.popup__close');
let fieldImageName = popupNewRecord.querySelector('.form__input_field_image-name');
let fieldImageUrl = popupNewRecord.querySelector('.form__input_field_image-url');

initialCards.forEach(item => {
  gallery.append(createCard(item.name, item.link));
});
editProfileButton.addEventListener('click', switchProfile);
formProfile.addEventListener('submit', handleFormProfile);
profileCloseButton.addEventListener('click', switchProfile);
imageCloseButton.addEventListener('click', switchImage);

addRecordButton.addEventListener('click', switchNewRecord);
newRecordCloseButton.addEventListener('click', switchNewRecord);
formNewRecord.addEventListener('submit', handleNewRecord);

function switchProfile() {
  fieldName.value = title.textContent;
  fieldDescription.value = subtitle.textContent;
  popupWithProfile.closest('.overlay').classList.toggle('overlay_active');
  popupWithProfile.classList.toggle('popup_active');
}
function switchImage() {
  popupImage.closest('.overlay').classList.toggle('overlay_active');
  popupImage.classList.toggle('popup_active');
}
function switchNewRecord() {
  popupNewRecord.closest('.overlay').classList.toggle('overlay_active');
  popupNewRecord.classList.toggle('popup_active');
}

function handleFormProfile(evt) {
  evt.preventDefault();
  title.textContent = fieldName.value;
  subtitle.textContent = fieldDescription.value;
  switchProfile();
}
function handleNewRecord(evt) {
  evt.preventDefault();
  gallery.prepend(createCard(fieldImageName.value, fieldImageUrl.value));
  fieldImageName.value = '';
  fieldImageUrl.value = '';
  switchNewRecord();
}

function createCard(name = 'Место', link = 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg') {
    let cardItem = cardTemplate.cloneNode(true);
    let cardTrash = cardItem.querySelector('.card__button_icon_trash');
    let cardLike = cardItem.querySelector('.card__button_icon_like');
    let cardImage = cardItem.querySelector('.card__img');
    
    cardTrash.addEventListener('click', function() {
      cardTrash.closest('.card').remove();
    });

    cardLike.addEventListener('click', function (evt) {
        evt.target.classList.toggle('card__button_icon_like-fill');
      });

    cardImage.addEventListener('click', fullImage);

    cardItem.querySelector('.card__title').textContent = name;
    cardItem.querySelector('.card__img').src = link;
    cardItem.querySelector('.card__img').alt = name;
    return cardItem;
}

function fullImage(evt) {
  let card = evt.target.closest('.card');
  let image= card.querySelector('.card__img');
  let title = card.querySelector('.card__title').textContent;

  popupImageSrc.src = image.src;
  popupImageSrc.alt = title;
  popupImageTitle.textContent = title;

  popupImage.closest('.overlay').classList.toggle('overlay_active');
  popupImage.classList.toggle('popup_active');
}