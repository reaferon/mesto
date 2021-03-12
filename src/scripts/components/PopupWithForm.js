import { Popup } from "./Popup.js";

class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._formSubmit = this._formSubmit.bind(this);
  }

  getInputValues() {
    this._inputList = this._popup.querySelectorAll(".popup__text");
    this._values = {};
    this._inputList.forEach(
      (input) => (this._values[input.name] = input.value)
    );

    return this._values;
  }

  _formSubmit(evt) {
    evt.preventDefault();
    this._handleFormSubmit(this.getInputValues());
    this.close();
  }

  setEventListeners() {
    this._popupForm = this._popup.querySelector(".popup__form");
    this._popupForm.addEventListener("submit", this._formSubmit);
    super.setEventListeners();
  }

  close() {
    super.close();
    this._popupForm.reset();
  }
}

export default PopupWithForm;
