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

initialCards.forEach(item => {
  gallery.append(createCard(item.name, item.link));
});
editProfileButton.addEventListener('click', switchProfile);
formProfile.addEventListener('submit', editFormProfile);
profileCloseButton.addEventListener('click', switchProfile);
imageCloseButton.addEventListener('click', switchImage);

addRecordButton.addEventListener('click', switchNewRecord);
newRecordCloseButton.addEventListener('click', switchNewRecord);
formNewRecord.addEventListener('submit', addNewRecord);

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

function editFormProfile(evt) {
  evt.preventDefault();
  title.textContent = fieldName.value;
  subtitle.textContent = fieldDescription.value;
  switchProfile();
}
function addNewRecord(evt) {
  evt.preventDefault();
  gallery.prepend(createCard(fieldImageName.value, fieldImageUrl.value));
  fieldImageName.value = '';
  fieldImageUrl.value = '';
  switchNewRecord();
}

function createCard(name = 'Место', link = 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg') {
    const cardItem = cardTemplate.cloneNode(true);
    const cardTrash = cardItem.querySelector('.card__button_icon_trash');
    const cardLike = cardItem.querySelector('.card__button_icon_like');
    const cardImage = cardItem.querySelector('.card__img');
    
    cardTrash.addEventListener('click', function() {
      cardTrash.closest('.card').remove();
    });

    cardLike.addEventListener('click', function (evt) {
        evt.target.classList.toggle('card__button_icon_like-fill');
    });

    cardImage.addEventListener('click', getFullImage);

    cardItem.querySelector('.card__title').textContent = name;
    cardItem.querySelector('.card__img').src = link;
    cardItem.querySelector('.card__img').alt = name;
    return cardItem;
}

function getFullImage(evt) {
  const card = evt.target.closest('.card');
  const image= card.querySelector('.card__img');
  const title = card.querySelector('.card__title').textContent;

  popupImageSrc.src = image.src;
  popupImageSrc.alt = title;
  popupImageTitle.textContent = title;

  popupImage.closest('.overlay').classList.toggle('overlay_active');
  popupImage.classList.toggle('popup_active');
}