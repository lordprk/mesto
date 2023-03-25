export default class Card {
  constructor(data, templateSelector, openPopupFoto) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._openPopupFoto = openPopupFoto;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector(".place")
      .cloneNode(true);

      return cardElement;
  }
  
  generateCard() {
    this._element = this._getTemplate();
    this._setEventListener();

    this._element.querySelector(".place__title").textContent = this._name;
    this._cardFoto = this._element.querySelector(".place__image");
    this._cardFoto.src = this._link;
    this._cardFoto.alt = this._name;

    return this._element;
  }
  //лайк
  _addtoggleLike(e) {
    e.target.classList.toggle("place__button-like_active");
  }
//Удаление
  _deleteCard(e) {
    e.target.closest(".place").remove();
  }

  _setEventListener() {
    this._element
      .querySelector(".place__image")
      .addEventListener("click", () => {
        this._openPopupFoto(this._name, this._link);
      });

    this._element
      .querySelector(".place__button-like")
      .addEventListener("click", this._addtoggleLike);



    this._element
      .querySelector(".place__button-delete")
      .addEventListener("click", this._deleteCard);
  }
}
