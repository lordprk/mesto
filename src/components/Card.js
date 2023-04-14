export default class Card {
  constructor(data, templateSelector, openPopupFoto) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._openPopupFoto = openPopupFoto;
  }
//Собираем конструктор из функций () и свойств {}


  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector(".place")
      .cloneNode(true);

    return cardElement;
  }
//берем обьект, создаем контанту, получаем оттуда свойство, затем получаем
//доступ к содержимому place и делаем копию, затем возвращаем константу обратно 
  
  generateCard() {
    const element = this._getTemplate();
    this._setEventListener(element);

    const title = element.querySelector(".place__title").textContent = this._name;
    const image = element.querySelector(".place__image");
    image.src = this._link;
    image.alt = this._name;

    return element;
  }
//беерем обьект, и в нем делаем из элемента прошлый обьект, затем ищ него
// выбераем  place title, и читаем его имя-выводим это в имя
//так же делаем с cardFoto-выберая из него place_image, к нему
//добавляем ссылку и имя из альта- и возвращаем целый элемент

  //лайк
  _toggleLike(e) {
    e.target.classList.toggle("place__button-like_active");
  }
//берем кнопку с функцией event и делаем свойсто нажатия 
//на place__button-like_active

  //Удаление
  _deleteCard(e) {
    e.target.closest(".place").remove();
  }
//берем кнопку с функцией event и делаем свойсто нажатия 
//на .place - при нажатие удаляем файл

  _setEventListener(element) {
    element
      .querySelector(".place__image")
      .addEventListener("click", () => {
        this._openPopupFoto(this._name, this._link);
      });

    element
      .querySelector(".place__button-like")
      .addEventListener("click", this._toggleLike);

    element
      .querySelector(".place__button-delete")
      .addEventListener("click", this._deleteCard);
  }
}
//большой обьект и с функциями. 1 - берем place__image добавляем килик на 
//нажатие картинкис именем и картинкой.??
//2 это же элемент выбераем place__button-like и кликер который дает 
//срабатывать this._addtoggleLike,
//3 то же самое, только кнопка с удалялкой