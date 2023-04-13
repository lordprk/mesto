export default class Popup {
    constructor(popupSelector) {
      this._popup = document.querySelector(popupSelector);
      this._popupCloseBtn = this._popup.querySelector('.popup__button-close');
      this._handleEscClose = this._handleEscClose.bind(this);
    }
    
    open () {
      this._popup.classList.add("popup_opened");
      window.addEventListener('keydown', this._handleEscClose);
    }
    close () {
      this._popup.classList.remove("popup_opened");
      window.removeEventListener('keydown', this._handleEscClose);
    }
    // _handleEscClose () {
    //   document.addEventListener("keyup", (evt) => {
    //     if (evt.key === "Escape") {
    //       this.close ()
    //       }
    //   })
    // }

    _handleEscClose(evt) {
      if (evt.key === 'Escape') {
          this.close();
      }
  }

    _addPopupCloser() {
      this._popupCloseBtn.addEventListener('click', () => {
          this.close();
      });
  }

  _addEmptySpaceCloser() {
    this._popup.addEventListener('click', (evt) => {
        if (evt.target === evt.currentTarget) {
            this.close();
        }
    });
}

    setEventListeners () {
      this._addPopupCloser();
      this._addEmptySpaceCloser();
    }
}

// //Функция открытия добавления
// const openPopup = function (popup) {
//     popup.classList.add("popup_opened");
  
//     document.addEventListener("keyup", closeEscPopup); // слушатель клика ESC
//   };
//   //создаем константу и функцию и если нажать popup_opened, то появите
//   //кнопка добавления??
  
//   //Универсальная функция закрытия popup
//   const closePopup = function (popup) {
//     popup.classList.remove("popup_opened");
//     document.removeEventListener("keyup", closeEscPopup); // Удаление клика ESC
//   };
//   //функция закрытия popup по нажатию на клавишу Esc
// function closeEscPopup(evt) {
  
//   }
//   //функция evt -ищет кнопку на закрытие: если кнопка ескейп то появляеться
//   // popup ищет popup_opened и закрывет его?

// //Закрытие попапа по внешней области
// const popupContainers = document.querySelectorAll(".popup");
// popupContainers.forEach((popup) => {
//   popup.addEventListener("click", function (event) {
//     if (event.target === event.currentTarget) {
//       closePopup(popup);
//     }
//   });
// });

