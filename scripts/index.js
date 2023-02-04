//Переменные
let popupElement = document.querySelector(".popup");
let formElement = document.querySelector(".popup__form");
let nameInput = document.querySelector(".popup__input_name_profile_name");
let jobInput = document.querySelector(".popup__input_name_profile_caption");
let profileName = document.querySelector(".profile__title");
let profileJob = document.querySelector(".profile__subtitle");
let popupOpenButton = document.querySelector(".profile__edit-button");
let popupCloseButton = document.querySelector(".popup__button-close");

//Функция открытия popup
let popupOpen = function () {
  popupElement.classList.add("popup_opened");
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
};

//Функция закрытия popup  
let popupClose = function () {
  popupElement.classList.remove("popup_opened");
};

//Функция отправки формы
function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  popupClose();
}

//Результат
popupOpenButton.addEventListener("click", popupOpen);
popupCloseButton.addEventListener("click", popupClose);
formElement.addEventListener("submit", handleFormSubmit);

/*Кнопка для лайка*/
/*let likeButtons = document.querySelectorAll(".place__button-like");

for (let i = 0; i < likeButtons.length; i++) {
  likeButtons[i].addEventListener("click", function () {
    likeButtons[i].classList.toggle("place__button-like_active");
  });
}*/
