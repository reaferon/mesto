class FormValidator {
  constructor(valudateFields, formElement) {
    this._formSelector = valudateFields.formSelector;
    this._inputSelector = valudateFields.inputSelector;
    this._submitButtonSelector = valudateFields.submitButtonSelector;
    this._activeButtonClass = valudateFields.activeButtonClass;
    this._inactiveButtonClass = valudateFields.inactiveButtonClass;
    this._inputErrorClass = valudateFields.inputErrorClass;
    this._errorClass = valudateFields.errorClass;

    this._formEl = formElement;
    this._buttonElement = formElement.querySelector(this._submitButtonSelector);
    this._inputList = Array.from(this._formEl.querySelectorAll(this._inputSelector))
    this.enableValidation = this.enableValidation.bind(this);
  }

  enableValidation() {
    this._setEventListeners();
  }

  resetValidation() {
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement)
    });
  }

  _setEventListeners() {
    this._toggleButtonState(this._inputList, this._buttonElement);

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(this._formEl, inputElement);
        this._toggleButtonState(this._inputList, this._buttonElement);
      });
    });
  }

  _checkInputValidity(formElement, inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _showInputError(formElement, inputElement, errorMessage) {
    const errorElement = formElement.querySelector(`#${inputElement.name}-error`);
    errorElement.textContent = errorMessage;
  }

  _hideInputError( inputElement) {
    const errorElement = document.querySelector(`#${inputElement.name}-error`);
    errorElement.textContent = '';
  }

  _toggleButtonState(inputList, buttonElement) {
    if (this._hasInvalidInput(inputList)) {
      buttonElement.classList.add(this._inactiveButtonClass);
      buttonElement.classList.remove(this._activeButtonClass);
      buttonElement.disabled = true;
    } else {
      buttonElement.classList.add(this._activeButtonClass);
      buttonElement.classList.remove(this._inactiveButtonClass);
      buttonElement.disabled = false;
    }
  }

  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }  
}
export default FormValidator;