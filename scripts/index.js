const photoGrid = document.querySelector('.photo-grid'); //фото грид
const gridItem = photoGrid.querySelector('.photo-grid__item'); //карточка фото грида

const popupImage = document.querySelector('.popup'); //попап картинки
const imagePopupImage = popupImage.querySelector('.popup__image'); //изображение попапа картинки



//функция открытия попапа
const openPopup = (popup) => {
  popup.classList.add('popup_opened');
  document.addEventListener('keyup', EscPress);
};

//находим все элементы фото грида и добавляем в массив
const imageList = Array.from(document.querySelectorAll('.photo-grid__item'));

//функция открытия попапа картинки. перебираем массив
imageList.forEach((imageElement) => {
  imageElement.addEventListener('click', function () { //слушатель клика

    imagePopupImage.src = event.target.src; //ссылка на изображение попапа берет ссылку из карточки на которой сработало событие клика
    imagePopupImage.alt = event.target.alt; //ссылка на alt попапа берет ссылку из карточки на которой сработало событие клика

    openPopup(popupImage); //универсальная функция открытия попапа
  });
});

//функция закрытия попапа
const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keyup', EscPress);
};

//функция закрытия попапа на esc
const EscPress = (evt) => {
  if (evt.key === 'Escape') {
    const popup = document.querySelector('.popup_opened');
    closePopup(popup);
  }
};

//функция закрытия попапа
popupImage.addEventListener('mousedown', (evt) => {
  if (evt.target.classList.contains('popup_opened'))  {
    closePopup(popupImage);
  }
  else if (evt.target.classList.contains('popup__close-button')) {
    closePopup(popupImage);
  }
})
