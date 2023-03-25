import { initialCards } from "./cards.js";
import Card from "./Card.js";
import FormValidator from "./FormValidator.js";

//Переменные для редактирования профиля
const popupAuthorElement = document.querySelector("#popup__author");
const formAuthor = document.querySelector(".popup__form_type_author");
const nameInput = document.querySelector(".popup__input_name_profile-name");
const jobInput = document.querySelector(".popup__input_name_profile-caption");
const profileName = document.querySelector(".profile__title");
const profileJob = document.querySelector(".profile__subtitle");
const popupOpenButtonAuthor = document.querySelector(".profile__edit-button");
const popupCloseButtonAuthor = document.querySelector(".popup__button-close");

//Переменные для редактирования карточек
const popupCard = document.querySelector(".popup_type_card");
const formCard = popupCard.querySelector(".popup__form_type_card");
const nameCardInput = formCard.querySelector(".popup__input_name_card-name");
const linkCardInput = formCard.querySelector(".popup__input_name_card-caption");
const popupCardOpenBtn = document.querySelector(".profile__add-button");
const popupCardCloseBtn = popupCard.querySelector(".popup__button-close");

// Переменные для попапа с картинкой
const popupImage = document.querySelector(".popup-image");
const popupImageCloseBtn = document.querySelector(".popup-image__close");
const imageLink = popupImage.querySelector(".popup-image__foto");
const imageSign = popupImage.querySelector(".popup-image__sign");

//Переменные для темпла
const template = document.querySelector("#place-template");
const cardList = document.querySelector(".places");

const config = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save",
  inactiveButtonClass: "popup__save_inactive",
  inputErrorClass: "popup__input_type_active",
  errorClass: "popup__info-error_active",
};

const editFormValidator = new FormValidator(config, popupAuthorElement);
const addFormValidator = new FormValidator(config, popupCard);

//функция закрытия popup по нажатию на клавишу Esc
function closeEscPopup(evt) {
  if (evt.key === "Escape") {
    const popup = document.querySelector(".popup_opened");
    closePopup(popup);
  }
}

//Функция котрая берет данные автора и подставляет в инпуты
const setAuthorsData = function () {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
};

//Функция отправки формы Профиль
function handleFormSubmitAuthor(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupAuthorElement);
}

//Закрытие попапа по внешней области
const popupContainers = document.querySelectorAll(".popup");
popupContainers.forEach((popup) => {
  popup.addEventListener("click", function (event) {
    if (event.target === event.currentTarget) {
      closePopup(popup);
    }
  });
});

//Функция открытия добавления
const openPopup = function (popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keyup", closeEscPopup); // слушатель клика ESC
};

//Универсальная функция закрытия popup
const closePopup = function (popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keyup", closeEscPopup); // Удаление клика ESC
};

//Результат
popupOpenButtonAuthor.addEventListener("click", () => {
  setAuthorsData();
  openPopup(popupAuthorElement);
});
popupCloseButtonAuthor.addEventListener("click", () =>
  closePopup(popupAuthorElement)
);
formAuthor.addEventListener("submit", handleFormSubmitAuthor);
popupCardOpenBtn.addEventListener("click", () => openPopup(popupCard));
popupCardCloseBtn.addEventListener("click", () => closePopup(popupCard));
popupImageCloseBtn.addEventListener("click", () => closePopup(popupImage));

function openPopupFoto(name, link) {
  imageLink.src = link;
  imageLink.alt = name;
  imageSign.textContent = name;
  openPopup(popupImage);
}

const createCard = (data) => {
  const card = new Card(data, ".place-template", openPopupFoto);
  return card.generateCard();
};

initialCards.forEach((data) => {
  const cardElement = createCard(data);
  cardList.append(cardElement);
});

// Добавление карточки пользователем
formCard.addEventListener("submit", (e) => {
  e.preventDefault();

  const cardElement = createCard({
    name: nameCardInput.value,
    link: linkCardInput.value,
  });

  cardList.prepend(cardElement);
  closePopup(popupCard);
  // e.submitter.classList.add("popup__save_inactive");
  // e.submitter.disabled = false;
});

editFormValidator.enableValidation();
addFormValidator.enableValidation();
