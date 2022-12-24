const profileInfoEditButton = document.querySelector('.profile-info__edit-button');
const popup = document.querySelector('.popup');
const popupCloseIcon = document.querySelector('.popup__close-icon');

let profileInfoTitle = document.querySelector('.profile-info__title');
let profileInfoCaption = document.querySelector('.profile-info__caption');

profileInfoEditButton.addEventListener('click', openPopup); 
popupCloseIcon.addEventListener('click', closePopup);

function openPopup(event) {
    popup.classList.add('popup__opened'); 
}

function closePopup() {
    popup.classList.remove('popup__opened'); 
}

// Находим форму в DOM
let formElement = document.querySelector('.popup__container');// Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
let nameInput = document.querySelector('.popup__input_name');// Воспользуйтесь инструментом .querySelector()
let jobInput = document.querySelector('.popup__input_job'); // Воспользуйтесь инструментом .querySelector()


// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmit (evt) {

    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value
    nameInput.setAttribute('value', 'Жак-Ив Кусто');
    jobInput.setAttribute('value', 'Исследователь океана');
    // Выберите элементы, куда должны быть вставлены значения полей

    // Вставьте новые значения с помощью textContent
    profileInfoTitle.textContent = nameInput.value;
    profileInfoCaption.textContent = jobInput.value;

    closePopup();
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmit);
