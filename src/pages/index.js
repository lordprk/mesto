// import { initialCards } from "../components/cards.js";
import './index.css';
import {initialCards,
  popupAuthorElement,
  formAuthor,
  nameInput,
  jobInput,
  profileName,
  profileJob,
  popupOpenButtonAuthor,
  popupCloseButtonAuthor,
  popupCard,
  formCard,
  nameCardInput,
  linkCardInput,
  popupCardOpenBtn,
  popupCardCloseBtn,
  popupImage,
  popupImageCloseBtn,
  cardList,
  config
} from "../utils/constants.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopopWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from '../components/UserInfo';


//const popupWithFoto = new PopupWithImage(".popup-image");

const editFormValidator = new FormValidator(config, popupAuthorElement);
const addFormValidator = new FormValidator(config, popupCard);

const popupEditProfile = new PopupWithForm (".popup_type_author",handleProfileFormSubtim);
popupEditProfile.setEventListeners();

const popupWithFoto = new PopupWithImage(".popup-image");
popupWithFoto.setEventListeners();

const popupAddCard = new PopupWithForm(".popup_type_card", addCard);
popupAddCard.setEventListeners();

const userInfo = new UserInfo ({
  name: ".profile__title",
  info: ".profile__subtitle"
});



//Функция котрая берет данные автора и подставляет в инпуты
// const setAuthorsData = function () {
//   nameInput.value = profileName.textContent;
//   jobInput.value = profileJob.textContent;
// };
//создаем константу и функцию и  сохраняем текстовое значение из него в  profileName и profileJob

//Сохранение данных автора 


//Функция отправки формы Профиль
// function handleFormSubmitAuthor(evt) {
//   evt.preventDefault();
//   profileName.textContent = nameInput.value;
//   profileJob.textContent = jobInput.value;
//   closePopup(popupAuthorElement);
// }

//Результат

// formAuthor.addEventListener("submit", handleFormSubmitAuthor);


// popupCardCloseBtn.addEventListener("click", () => closePopup(popupCard));
// popupImageCloseBtn.addEventListener("click", () => closePopup(popupImage));
//подставляем все значения и выскакиваю окна??

// function openPopupFoto(name, link) {
//   imageLink.src = link;
//   imageLink.alt = name;
//   imageSign.textContent = name;
//   openPopup(popupImage);
// }
//Функтция для card с исходными данными

//РАБОТАЕМ С КАРТОЧКАМИ

//создаем карточку?

// Создает новыую карточку из 3 функция и возвращает generateCard в card??
//(data) => ??


const sectionPlaces = new Section({
  items: initialCards,
  renderer:(item) => {
    return createCard(item)

}}, ".places");

sectionPlaces.renderItems();


// initialCards.forEach((data) => {
//   const cardElement = createCard(data);
//   cardList.append(cardElement);
// });

//Открытие попап для фото




// Добавление карточки пользователем
// formCard.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const cardElement = createCard({
//     name: nameCardInput.value,
//     link: linkCardInput.value,
//   });

//   cardList.prepend(cardElement);
//   closePopup(popupCard);
// });

//Открываем большую карточку


// function openPopupFoto(name, link) {
//   popupWithFoto.open(name, link);
// };
// popupWithFoto.setEventListeners();
function createCard (data) {
  const card = new Card(data, ".place-template", (title, src)=> {
    popupWithFoto.open(title, src)
  });
  return card.generateCard();
}

function addCard ({name, caption}) {
  const data = {name, link: caption }
  console.log(data);
  const card = createCard(data);
  sectionPlaces.addItem(card);
}

function handleProfileFormSubtim({name, caption}) {
  const obj = {name, caption}
  console.log(obj);
  userInfo.setUserInfo(obj)
}

popupCardOpenBtn.addEventListener("click", () => {
  // openPopup(popupCard);
  popupAddCard.open();
});

popupOpenButtonAuthor.addEventListener("click", () => {
  // setAuthorsData();
  // openPopup(popupAuthorElement);
  popupEditProfile.open()

});

popupCloseButtonAuthor.addEventListener("click", () =>
popupEditProfile.close()
);

editFormValidator.enableValidation();
addFormValidator.enableValidation();
// вытаскиваем валидатор для проверки всего
