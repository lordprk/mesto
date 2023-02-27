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
const cardLink = document.querySelector(".place__image");
const cardName = document.querySelector(".place__title");
const popupCardOpenBtn = document.querySelector(".profile__add-button");
const popupCardCloseBtn = popupCard.querySelector(".popup__button-close");

// Переменные для попапа с картинкой
const popupImage = document.querySelector(".popup-image");
const formImage = popupImage.querySelector(".popup-image__container");
const popupImageOpenBtn = document.querySelector(".card__foto");
const popupImageCloseBtn = document.querySelector(".popup-image__close");
const imageLink = popupImage.querySelector(".popup-image__foto");
const imageSign = popupImage.querySelector(".popup-image__sign");

//Переменные для темпла
const template = document.querySelector("#place-template");
const cardList = document.querySelector(".places");
const cardItem = document.querySelector(".place");
const submitBtn = document.querySelector(".popup__save_type_card");

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

//Удаление карточек
function deleteCard(e) {
  e.target.closest(".place").remove();
}

//Функция лайков
function toggleLike(e) {
  e.target.classList.toggle("place__button-like_active");
}

//создаем одну карточку
function createCard(item) {
  const card = template.content.cloneNode(true);
  card.querySelector(".place__title").textContent = item.name;
  const image = card.querySelector(".place__image");
  image.setAttribute("src", item.link);
  image.setAttribute("alt", item.name);

  card.querySelector(".place__image").addEventListener("click", function () {
    imageLink.src = item.link;
    imageSign.textContent = item.name;
    imageLink.setAttribute("alt", item.name);
    openPopup(popupImage);
  });

  card
    .querySelector(".place__button-delete")
    .addEventListener("click", deleteCard);
  card
    .querySelector(".place__button-like")
    .addEventListener("click", toggleLike);

  return card;
}

// создает изначальные карточки
function renderCards(initialCard) {
  const cards = initialCard.map((item) => {
    return createCard(item);
  });

  cardList.append(...cards);
}

renderCards(initialCards);

// Добавление карточки пользователем
formCard.addEventListener("submit", (e) => {
  e.preventDefault();

  const card = createCard({
    name: nameCardInput.value,
    link: linkCardInput.value,
  });

  cardList.prepend(card);
  closePopup(popupCard);
  e.submitter.classList.add("popup__save_inactive");
  e.submitter.disabled = false;
});
