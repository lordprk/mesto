export const initialCards = [
    {
      name: "Архыз",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
    },
    {
      name: "Челябинская область",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
    },
    {
      name: "Иваново",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
    },
    {
      name: "Камчатка",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
    },
    {
      name: "Холмогорский район",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
    },
    {
      name: "Байкал",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
    },
  ];

  //Переменные для редактирования профиля
export const popupAuthorElement = document.querySelector("#popup__author");
export const formAuthor = document.querySelector(".popup__form_type_author");
export const nameInput = document.querySelector(".popup__input_name_profile-name");
export const jobInput = document.querySelector(".popup__input_name_profile-caption");
export const profileName = document.querySelector(".profile__title");
export const profileJob = document.querySelector(".profile__subtitle");
export const popupOpenButtonAuthor = document.querySelector(".profile__edit-button");
export const popupCloseButtonAuthor = document.querySelector(".popup__button-close");

//Переменные для редактирования карточек
export const popupCard = document.querySelector(".popup_type_card");
export const formCard = popupCard.querySelector(".popup__form_type_card");
export const nameCardInput = formCard.querySelector(".popup__input_name_card-name");
export const linkCardInput = formCard.querySelector(".popup__input_name_card-caption");
export const popupCardOpenBtn = document.querySelector(".profile__add-button");
export const popupCardCloseBtn = popupCard.querySelector(".popup__button-close");

// Переменные для попапа с картинкой
export const popupImage = document.querySelector(".popup-image");
export const popupImageCloseBtn = document.querySelector(".popup-image__close");

//Переменные для темпла
export const cardList = document.querySelector(".places");

export const config = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save",
  inactiveButtonClass: "popup__save_inactive",
  inputErrorClass: "popup__input_type_active",
  errorClass: "popup__info-error_active",
};