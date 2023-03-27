export default class FormValidator {
  constructor(config, formElement) {
    this._config = config;
    // Находим все поля внутри формы, сделаем из них массив методом Array.from
    this._inputSelector = Array.from(
      formElement.querySelectorAll(config.inputSelector)
    );
    this._submitButtonSelector = formElement.querySelector(
      config.submitButtonSelector
    );
    this._formElement = formElement;
  }
//Собираем конструктор из функций () и свойств {}
//Array это []?  


  // приватный метод показа ошибки
  _showInputError(inputElement, errorMessage) {
    const errorElement = inputElement.nextElementSibling;
    inputElement.classList.add(this._config.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._config.errorClass);
  }
//создание ошибки-берем функию и говорим ей смотри inputElement
//???

  // приватный метод скрытия ошибки
  _hideInputError(inputElement) {
    const errorElement = inputElement.nextElementSibling;
    inputElement.classList.remove(this._config.inputErrorClass);
    errorElement.classList.remove(this._config.errorClass);
    errorElement.textContent = "";
  }

  // приватный метод проверки валидности поля
  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  // приватный метод проверки валидности всех полей формы
  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  // приватный метод блокировки кнопки
  _disableSubmitButton() {
    this._buttonElement.classList.add(this._config.inactiveButtonClass);
    this._buttonElement.setAttribute("disabled", true);
  }

  // приватный метод разблокировки кнопки
  _enableSubmitButton() {
    this._buttonElement.classList.remove(this._config.inactiveButtonClass);
    this._buttonElement.removeAttribute("disabled");
  }

  // приватный метод переключения состояния кнопки
  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._disableSubmitButton();
    } else {
      this._enableSubmitButton();
    }
  }

  _createEvent() {
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._inputSelector.forEach((item) => (item.value = ""));
    });
    this._inputList = this._inputSelector;
    //  Array.from(
    //   this._formElement.querySelectorAll(this._inputSelector)
    // );
    this._buttonElement = this._submitButtonSelector;
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  }

  /////
  // публичный метод настройки обработчиков событий для полей формы
  enableValidation() {
    this._createEvent()
  }
}
