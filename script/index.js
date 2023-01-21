const popup = document.querySelector('.popup');
const formElement = document.querySelector('.popup__form');
const profileInfoEditButton = document.querySelector('.profile-info__edit-button');

const profileInfoTitle = document.querySelector('.profile-info__title');
const profileInfoCaption = document.querySelector('.profile-info__caption');

const nameInput = document.querySelector('.popup__input_form_name');
const jobInput = document.querySelector('.popup__input_form_job');

const popupCloseIcon = document.querySelector('.popup__close-icon');

function openPopup() {
    popup.classList.add('popup_opened'); 
    nameInput.value = profileInfoTitle.textContent;
    jobInput.value = profileInfoCaption.textContent;

}

function closePopup() {
    popup.classList.remove('popup_opened'); 
}


function handleFormSubmit (evt) {
    evt.preventDefault(); 

    profileInfoTitle.textContent = nameInput.value;
    profileInfoCaption.textContent = jobInput.value;

    closePopup();
}

profileInfoEditButton.addEventListener('click', openPopup); 
popupCloseIcon.addEventListener('click', closePopup);

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmit);
