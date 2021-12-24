document.addEventListener('DOMContentLoaded', function () {


    let playBtn = document.querySelector('.time__btn'),
        popup = document.querySelector('.popup'),
        closePopup = document.querySelector('.popup__close'),
        body = document.querySelector('body');

    document.addEventListener('click', hide);

    function hide(event) {
        if (event.target.closest('.popup') && !event.target.closest('.popup__content')) {
            hidePopup();
        }
    }

    function hidePopup() {
        popup.classList.remove('popup--active');
        body.classList.remove('active');
        document.querySelector('iframe').src='';
    }

    playBtn.addEventListener('click', function () {
        popup.classList.add('popup--active');
        body.classList.add('active');
        document.querySelector('iframe').src='https://www.youtube.com/embed/dl16e_mG6hg';
    });

    closePopup.addEventListener('click', hidePopup);
});