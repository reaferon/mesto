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

    this.enableValidation = this.enableValidation.bind(this);
  }

  enableValidation() {
    this._setEventListeners();
  }

  _setEventListeners() {
    const inputs = Array.from(this._formEl.querySelectorAll(this._inputSelector));
    const buttonElement = this._formEl.querySelector(this._submitButtonSelector);

    this._toggleButtonState(inputs, buttonElement);

    inputs.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(this._formEl, inputElement);
        this._toggleButtonState(inputs, buttonElement);
      });
    });
  }

  _checkInputValidity(formElement, inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(formElement, inputElement);
    }
  }

  _showInputError(formElement, inputElement, errorMessage) {
    const errorElement = formElement.querySelector(`#${inputElement.name}-error`);
    errorElement.textContent = errorMessage;
  }

  _hideInputError(formElement, inputElement) {
    const errorElement = formElement.querySelector(`#${inputElement.name}-error`);
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