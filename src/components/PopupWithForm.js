import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;

    //Поиск формы
    this._form = this._popup.querySelector(".popup__form");
    //Поиск инпутов
    this._inputList = this._form.querySelectorAll(".popup__input");
    //Поиск сохр конп
    this._button = this._form.querySelector(".popup__save");
  }

  //cобирает данные всех полей формы.
  _getInputValues() {
    //пустой обьект
    const formValues = {};

    //Собираем значение со всех полей popup__input
    this._inputList.forEach((input,i,arr) => {
      formValues[input.name] = input.value;
    });

    //возвращаем форму
    console.log(formValues)
    return formValues;
  }
  //добавляет слушатель клика иконке закрытия попапа
  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
        evt.preventDefault();
    //Отменям это поведение?
    const inputValues = this._getInputValues()
    console.log(inputValues);
    // добавим вызов _handleFormSubmit
    // передадим обьект -результат _getInputValues
    this._handleFormSubmit(inputValues);

    this.close();
    });
  }

  //закрытие попата
  close() {
    super.close();
    // сбросить все поля
    this._form.reset();
  }
}
