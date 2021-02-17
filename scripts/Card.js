import { popupImage, popupImageSrc, popupImageTitle } from './index.js';
import { openPopup } from './Popup.js';

class Card {
    constructor(data, cardSelector) {
        this._name = data.name;
        this._link = data.link;
        this._cardSelector = cardSelector;
        this._openPopupPhoto = this._openPopupPhoto.bind(this);
    }

    _getTemplate() {
        const cardTemplate = document
        .querySelector(this._cardSelector)
        .content
        .cloneNode(true);
        
        return cardTemplate;
    }

    getHtml() {
        this._view = this._getTemplate();
        this._view.querySelector('.card__title').textContent = this._name;
        this._setEventListeners();
        const cardImage = this._view.querySelector('.card__img');
        cardImage.src = this._link;
        cardImage.alt = this._name;
        return this._view;
    }

    _openPopupPhoto() {
        popupImageSrc.src = '';
        popupImageSrc.src = this._link;
        popupImageSrc.alt = this._name;
        popupImageTitle.textContent = this._name;

        openPopup(popupImage, '.overlay-image')
    }

    _setEventListeners() {
        this._view.querySelector('.card__button_icon_trash').addEventListener('click', function(evt) {
            evt.target.closest('.card').remove();
        });
        this._view.querySelector('.card__button_icon_like').addEventListener('click', function (evt) {
            evt.target.classList.toggle('card__button_icon_like-fill')
        });
        this._view.querySelector('.card__img').addEventListener('click', this._openPopupPhoto);
    }
}

export default Card;