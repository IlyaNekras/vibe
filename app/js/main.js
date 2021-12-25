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
        document.querySelector('iframe').src = '';
    }

    playBtn.addEventListener('click', function () {
        popup.classList.add('popup--active');
        body.classList.add('active');
        document.querySelector('iframe').src = 'https://www.youtube.com/embed/dl16e_mG6hg';
    });

    closePopup.addEventListener('click', hidePopup);

    $('.location__slider').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        prevArrow: '<button type="button" class="prev"><img src="icons/arrow-left.svg"></button>',
        nextArrow: '<button type="button" class="next"><img src="icons/arrow-right.svg"></button>',
        speed: 300,
        fade: true,
        cssEase: 'linear',

    });

    //изменение состояния стрелок основной слайдер
    $('.location__slider').on('afterChange', function () {
        let currentSlide = $('.location__slider').slick('slickCurrentSlide');
        if (currentSlide == 0) {
            $('.prev').hide();
        } else if (currentSlide == 2) {
            $('.next').hide();
        }
        if (currentSlide > 0 && currentSlide < 2) {
            $('.prev').show();
            $('.next').show();
        }
    });
    $(document).ready(function () {
        let currentSlide = $('.location__slider').slick('slickCurrentSlide');
        if (currentSlide == 0) {
            $('.prev').hide();
        }
    });

    //слайдер картинок на рабочем месте
    $('.location__slider-img').slick({
        autoplay: true,
        arrows: false,
        dots: true,
        speed: 100,
        fade: true,
        cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1,
    });

    //слайдер выбора рабочих мест
    $('.location__slider-content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.location__slider-bottom'
    });
    $('.location__slider-bottom').slick({
        // infinite: false,
        prevArrow: '<button type="button" class="prev-arrow"><img src="icons/prev-arrow.svg"></button>',
        nextArrow: '<button type="button" class="next-arrow"><img src="icons/next-arrow.svg"></button>',
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.location__slider-content',
        speed: 100,
        fade: true,
        cssEase: 'linear',
    });

    //  //изменение состояния стрелок слайдера раюочих мест
    //  $('.location__slider-bottom').on('afterChange', function () {
    //     let currentSlide = $('.location__slider-bottom').slick('slickCurrentSlide');
    //     if (currentSlide == 0) {
    //         $('.prev-arrow').hide();
    //     } else if (currentSlide == 6) {
    //         $('.next-arrow').hide();
    //     }
    //     if (currentSlide > 0 && currentSlide < 6) {
    //         $('.prev-arrow').show();
    //         $('.next-arrow').show();
    //     }
    // });
    // $(document).ready(function () {
    //     let currentSlide = $('.location__slider-bottom').slick('slickCurrentSlide');
    //     if (currentSlide == 0) {
    //         $('.prev-arrow').hide();
    //     }
    // });


   
});