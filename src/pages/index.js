import "./index.css";

import Card from "../scripts/components/Card.js";

import PopupWithImage from "../scripts/components/PopupWithImage.js";

import PopupWithForm from "../scripts/components/PopupWithForm.js";

import Section from "../scripts/components/Section.js";

import UserInfo from "../scripts/components/UserInfo.js";

import FormValidator from "../scripts/components/FormValidator.js";

const initialCards = [
  {
    name: "Архыз",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

const valObj = {
  formSelector: ".popup__form",
  inputSelector: ".popup__text",
  submitButtonSelector: ".popup__submit-button_selector",
  activeButtonClass: "popup__submit-button",
  inactiveButtonClass: "popup__submit-button_disabled",
  inputErrorClass: "popup__error",
  errorClass: "popup__error_visible",
};

const popupPhoto = document.querySelector(".popup-photo");
const popupImg = popupPhoto.querySelector(".popup__img");
const popupTitle = popupPhoto.querySelector(".popup__title-photo");

const cardContainer = document.querySelector(".cards__container");

const profile = document.querySelector(".lead");
const profileName = profile.querySelector(".lead__name");
const profileDescription = profile.querySelector(".lead__description");

const editButton = profile.querySelector(".lead__edit-button");
const addButton = profile.querySelector(".lead__add-button");

const popupEdit = document.querySelector(".popup_edit");
const popupEditForm = popupEdit.querySelector(".popup__form");

const text = popupEdit.querySelector(".popup__text_type_name");
const description = popupEdit.querySelector(".popup__text_type_description");

const template = "#card-template";

const popupAdd = document.querySelector(".popup_image");
const popupAddForm = popupAdd.querySelector(".popup__form");

const popups = Array.from(document.querySelectorAll(".popup"));

const imageFormElement = popups.find((image) =>
  image.querySelector(".popup__form_image")
);

const editFormElement = popups.find((edit) =>
  edit.querySelector(".popup__form_edit")
);

const userData = new UserInfo({
  nameSelector: profileName,
  description: profileDescription,
});
const editFormValidator = new FormValidator(valObj, popupEditForm);
editFormValidator.enableValidation();

const addFormValidator = new FormValidator(valObj, popupAddForm);
addFormValidator.enableValidation();

function buttonEdit(element) {
  const saveButton = element.querySelector(".popup__submit-button_selector");
  saveButton.classList.add("popup__submit-button_disabled");
  saveButton.disabled = true;
}

function createCard(data) {
  const card = new Card(data, template, () => {
    imgPopup.open(data.link, data.name);
  });
  return card;
}

function openPopupEdit() {
  buttonEdit(editFormElement);

  const profile = userData.getUserInfo();
  text.value = profile.name;
  description.value = profile.description;

  editPopup.open();
}

function openPopupAdd() {
  buttonEdit(imageFormElement);

  addPopup.open();
}

const cardsList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const card = createCard(item);
      const cardElement = card.getView();
      cardsList.addItem(cardElement, true);
    },
  },
  cardContainer
);

cardsList.renderItems();

const editPopup = new PopupWithForm({
  popupSelector: popupEdit,
  handleFormSubmit: (item) => {
    userData.setUserInfo(item.name, item.description);
  },
});

editPopup.setEventListeners();

const addPopup = new PopupWithForm({
  popupSelector: popupAdd,
  handleFormSubmit: () => {
    const inputData = addPopup._getInputValues();

    const newPlaceData = {
      name: inputData.title,
      link: inputData.link,
    };

    const card = createCard(newPlaceData);
    const cardElement = card.getView();
    cardsList.addItem(cardElement, false);
  },
});

addPopup.setEventListeners();

const imgPopup = new PopupWithImage(popupPhoto, popupImg, popupTitle);

imgPopup.setEventListeners();

editButton.addEventListener("click", openPopupEdit);
addButton.addEventListener("click", openPopupAdd);