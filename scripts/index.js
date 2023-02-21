//Переменные для редактирования профиля
const popupElement = document.querySelector(".popup");
const formElement = document.querySelector(".popup__form");
const nameInput = document.querySelector(".popup__input_name_profile-name");
const jobInput = document.querySelector(".popup__input_name_profile-caption");
const profileName = document.querySelector(".profile__title");
const profileJob = document.querySelector(".profile__subtitle");
const popupOpenButton = document.querySelector(".profile__edit-button");
const popupCloseButton = document.querySelector(".popup__button-close");

//Переменные для редактирования карточек
const popupCard = document.querySelector(".popup_type_card");
const formCard = popupCard.querySelector(".popup__form_type_card");
const nameCardInput = formCard.querySelector(".popup__input_name_card-name");
const linkCardInput = formCard.querySelector(".popup__input_name_card-caption");
const cardLink = document.querySelector(".card__foto");
const cardName = document.querySelector(".card__title");
const popupCardOpenBtn = document.querySelector(".profile__add-button");
const popupCardCloseBtn = popupCard.querySelector(".popup__button-close");

// Переменные для попапа с картинкой &
const popupImage = document.querySelector('.popup-image');
const formImage = popupImage.querySelector('.popup-image__container');
const popupImageOpenBtn = document.querySelector('.card__foto');
const popupImageCloseBtn = document.querySelector('.popup-image__close');
const imageLink = popupImage.querySelector('.popup-image__foto');
const imageSign = popupImage.querySelector('.popup-image__sign');

//Переменные для темпла
const template = document.querySelector('#place-template');
const cardList = document.querySelector('.places');
const cardItem = document.querySelector('.place');
const submitBtn = document.querySelector('.popup__button-save_type_card');

//Функция открытия popup
const popupOpen = function () {
  popupElement.classList.add("popup_opened");
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
};

//Функция закрытия popup
const popupClose = function () {
  popupElement.classList.remove("popup_opened");
};

//Функция отправки формы
function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  popupClose();
}

//Функция открытия popup2
const popupOpenBtn = function () {
  popupCard.classList.add("popup_opened");
  nameCardInput.value = cardLink.textContent;
  linkCardInput.value = cardName.textContent;
};

//Функция закрытия popup2
const popupCloseBtn = function () {
  popupCard.classList.remove("popup_opened");
};

//Функция отправки формы2
function handleFormSubmitBtn(evt) {
  evt.preventDefault();
  cardLink.textContent = nameCardInput.value;
  cardName.textContent = linkCardInput.value;
  popupCloseBtn();
}

const popupOpenImage = function () {

}

//Результат
popupOpenButton.addEventListener("click", popupOpen);
popupCloseButton.addEventListener("click", popupClose);
formElement.addEventListener("submit", handleFormSubmit);
popupCardOpenBtn.addEventListener("click", popupOpenBtn);
popupCardCloseBtn.addEventListener("click", popupCloseBtn);
formCard.addEventListener("submit", handleFormSubmitBtn);

//Работа с карточками
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

//Удаление карточек
function deleteCard(e) {
  e.target.closest('.place').remove();
}

//Функция лайков
 function heardActive(e) {
  e.target.classList.toggle('place__button-like_active')
}

//создаю одну карточку
function createCard(item){
  const card = template.content.cloneNode(true);
  card.querySelector('.place__title').textContent = item.name;
  card.querySelector('.place__image').setAttribute('src', item.link);
  card.querySelector('.place__image').setAttribute('alt', item.name);

  card.querySelector('.place__image').addEventListener('click', function (){

    imageLink.src = item.link;
    imageSign.textContent = item.name; 

    togglePopup(popupImage)
  });

  card.querySelector('.place__button-delete').addEventListener('click', deleteCard);
  card.querySelector('.place__button-like').addEventListener('click', heardActive);
  
  return card;
}



// создает изначальные карточки
function renderCards(initial) {
  const cards = initial.map((item) => {
    return createCard(item);
  });

  cardList.append(...cards);
}

renderCards(initialCards);

 // Добовление карточки пользователем
 submitBtn.addEventListener('click', (e) => {
  e.preventDefault();

  const card = createCard({name: nameCardInput.value, link: linkCardInput.value});

  cardList.prepend(card);
  togglePopup(popupCard);
});




  //Закрытие попапа для фото
  popupImageCloseBtn.addEventListener('click', function(){
      togglePopup(popupImage)
  })
