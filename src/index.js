import "./index.css";
import {
  initialCards,
  popupAuthorElement,
  popupOpenButtonAuthor,
  popupCard,
  popupCardOpenBtn,
  config,
} from "../utils/constants.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo";
// import Api from "../components/Api";

//const popupWithFoto = new PopupWithImage(".popup-image");

const editFormValidator = new FormValidator(config, popupAuthorElement);
const addFormValidator = new FormValidator(config, popupCard);

const popupEditProfile = new PopupWithForm(
  ".popup_type_author",
  handleProfileFormSubtim
);
popupEditProfile.setEventListeners();

const popupWithFoto = new PopupWithImage(".popup-image");
popupWithFoto.setEventListeners();

const popupAddCard = new PopupWithForm(".popup_type_card", addCard);
popupAddCard.setEventListeners();

const userInfo = new UserInfo({
  name: ".profile__title",
  info: ".profile__subtitle",
});

//РАБОТАЕМ С КАРТОЧКАМИ

const sectionPlaces = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      return createCard(item);
    },
  },
  ".places"
);

sectionPlaces.renderItems();

// //!!!!!
// function handleFormSubmitAuthor(evt) {
//   evt.preventDefault();
//   profileName.textContent = nameInput.value;
//   profileJob.textContent = jobInput.value;
//   closePopup(popupAuthorElement);
// }
// //Открытие попап для фото

function createCard(data) {
  const card = new Card(data, ".place-template", (title, src) => {
    popupWithFoto.open(title, src);
  });
  return card.generateCard();
}

function addCard({ name, caption }) {
  const data = { name, link: caption };
  console.log(data);
  const card = createCard(data);
  sectionPlaces.addItem(card);
}

function handleProfileFormSubtim({ name, caption }) {
  const obj = { name, caption };
  console.log(obj);
  userInfo.setUserInfo(obj);
}

popupCardOpenBtn.addEventListener("click", () => {
  // openPopup(popupCard);
  popupAddCard.open();
});

popupOpenButtonAuthor.addEventListener("click", () => {
  popupEditProfile.setInputValues(userInfo.getUserInfo());
  editFormValidator.enableSubmitButton();
  popupEditProfile.open();
});

// popupCloseButtonAuthor.addEventListener("click", () =>
//   popupEditProfile.close()
// );

editFormValidator.enableValidation();
addFormValidator.enableValidation();
// вытаскиваем валидатор для проверки всего
// const options = {
//   url: `https://mesto.nomoreparties.co/v1/cohort-63`,
//   headers : {
//     authorization: "671d21ec-3690-46e2-9f78-45e9461232b9",
//   }
// }

// const api = new Api (options)

// api.getInfoUser().then((res) => {
//   console.log(res)
// })
