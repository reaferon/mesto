const valObj = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__submit',
  activeButtonClass: 'form__submit',
  inactiveButtonClass: 'form__submit_disabled',
  inputErrorClass: 'form__error',
  errorClass: 'form__error_visible'
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const enableValidation = (obj) => {
  const forms = Array.from(document.querySelectorAll(obj.formSelector));
  forms.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    setEventListeners(formElement, obj);
  });
}

const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`#${inputElement.name}-error`);
  errorElement.textContent = errorMessage;
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`#${inputElement.name}-error`);
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement, obj) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, obj);
  } else {
    hideInputError(formElement, inputElement, obj);
  }
};

const setEventListeners = (formElement, obj) => {
  const inputs = Array.from(formElement.querySelectorAll(obj.inputSelector));
  const buttonElement = formElement.querySelector(obj.submitButtonSelector);

  toggleButtonState(inputs, buttonElement, obj);

  inputs.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, obj);
      toggleButtonState(inputs, buttonElement, obj);
    });
  });
};

const toggleButtonState = (inputList, buttonElement, obj) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(obj.inactiveButtonClass);
    buttonElement.classList.remove(obj.activeButtonClass);
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.add(obj.activeButtonClass);
    buttonElement.classList.remove(obj.inactiveButtonClass);
    buttonElement.disabled = false;
  }
}

enableValidation(valObj);