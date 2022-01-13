"use strict"
document.addEventListener('DOMContentLoaded', function () {

    //POPUP
    let playBtn = document.querySelector('.time__btn'),
        popup = document.querySelector('.popup'),
        closePopup = document.querySelectorAll('.popup__close'),
        video = document.querySelector('.popup__video'),
        map = document.querySelector('.popup__map'),
        mapBtn = document.querySelector('.plan__phone-map'),
        body = document.querySelector('body');

    document.addEventListener('click', hide);

    function hide(event) {
        if (event.target.closest('.popup') && !event.target.closest('.popup__video') && !event.target.closest('.popup__map')) {
            hidePopup();
        }
    }

    function hidePopup() {
        popup.classList.remove('popup--active');
        body.classList.remove('active');
        map.classList.remove('popup__map--active');
        video.classList.remove('popup__video--active');
        document.querySelector('iframe').src = '';
    }

    closePopup.forEach(function (i) {
        i.addEventListener('click', hidePopup);
    });

    //воспроизведение видео в POPUP
    playBtn.addEventListener('click', function () {
        popup.classList.add('popup--active');
        video.classList.add('popup__video--active');
        body.classList.add('active');
        document.querySelector('iframe').src = 'https://www.youtube.com/embed/dl16e_mG6hg';
    });

    //открытие карты в POPUP
    mapBtn.addEventListener('click', function () {
        popup.classList.add('popup--active');
        map.classList.add('popup__map--active');
        body.classList.add('active');
    });

    //блок ответ-вопрос
    let itemBox = document.querySelectorAll('.conditions__item');

    function showAnswer() {
        this.classList.toggle('active');
    }

    itemBox.forEach(function (e) {
        e.addEventListener('click', showAnswer);
    });

    //tabs
    let tenant = document.getElementById('tenant'),
        customer = document.getElementById('customer'),
        reviewItem = document.querySelectorAll('.reviews__item'),
        tab1 = document.getElementById('tab-1'),
        tab2 = document.getElementById('tab-2');

    function activeTab(e) {
        e.preventDefault();
        tab1.classList.toggle('reviews__item--active');
        tab2.classList.toggle('reviews__item--active');
        tenant.classList.toggle('active');
        customer.classList.toggle('active');
    }

    reviewItem.forEach(function (e) {
        e.addEventListener('click', activeTab);
    });



    //библиотека для анимации
    new WOW().init();

    //слайдер блока 'location'
    $('.location__slider').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        prevArrow: '<button type="button" class="prev"></button>',
        nextArrow: '<button type="button" class="next"></button>',
        speed: 300,
        fade: true,
        cssEase: 'linear',

    });

    //изменение состояния стрелок слайдера location
    $('.location__slider').on('afterChange', function () {
        let currentSlide = $('.location__slider').slick('slickCurrentSlide');
        if (currentSlide == 0) {
            $('.prev').css({
                'backgroundImage': 'url("../icons/arrow-left.svg")',
                'transform': 'rotate(0deg)'
            });
            $('.next').css('backgroundImage', 'url("../icons/arrow-right.svg")');
        } else if (currentSlide == 1) {
            $('.next').css('backgroundImage', 'url("../icons/arrow-rightgray.svg")');
            $('.prev').empty('<img src="icons/arrow-left.svg">');
            $('.prev').css({
                'backgroundImage': 'url("../icons/arrow-right.svg")',
                'transform': 'rotate(180deg)'
            });
        }
    });
    $(document).ready(function () {
        let currentSlide = $('.location__slider').slick('slickCurrentSlide');
        if (currentSlide == 0) {
            $('.prev').css('backgroundImage', 'url("../icons/arrow-left.svg")');
            $('.next').css('backgroundImage', 'url("../icons/arrow-right.svg")');
        }
    });


    // $('.location__slider').on('afterChange', function () {
    //     let currentSlide = $('.location__slider').slick('slickCurrentSlide');
    //     if (currentSlide == 0) {
    //         $('.prev').hide();
    //         $('.next').show();
    //     } else if (currentSlide == 1) {
    //         $('.next').hide();
    //         $('.prev').show();
    //     }
    // });
    // $(document).ready(function () {
    //     let currentSlide = $('.location__slider').slick('slickCurrentSlide');
    //     if (currentSlide == 0) {
    //         $('.prev').hide();
    //     }
    // });

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
        prevArrow: '<button type="button" class="prev-arrow"><img src="icons/prev-arrow.svg"></button>',
        nextArrow: '<button type="button" class="next-arrow"><img src="icons/next-arrow.svg"></button>',
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.location__slider-content',
        speed: 100,
        fade: true,
        cssEase: 'linear',
    });

    //слайдер блока 'stories'
    $('.stories__slider').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        prevArrow: '<button type="button" class="prev-stories"></button>',
        nextArrow: '<button type="button" class="next-stories"></button>',
        speed: 300,
        fade: true,
        cssEase: 'linear',
    });

    //изменение состояния стрелок слайдера в блоке "stories"
    $('.stories__slider').on('afterChange', function () {
        let currentSlide = $('.stories__slider').slick('slickCurrentSlide');
        if (currentSlide == 0) {
            $('.prev-stories').css({
                'backgroundImage': 'url("../icons/arrow-left.svg")',
                'transform': 'rotate(0deg)'
            });
        } else
        if (currentSlide == 1 && currentSlide < 2) {
            $('.next-stories').css('backgroundImage', 'url("../icons/arrow-right.svg")');
            $('.prev-stories').empty('<img src="icons/arrow-left.svg">');
            $('.prev-stories').css({
                'backgroundImage': 'url("../icons/arrow-right.svg")',
                'transform': 'rotate(180deg)'
            });
        } else if (currentSlide == 2) {
            $('.next-stories').css('backgroundImage', 'url("../icons/arrow-rightgray.svg")');
        }

    });
    $(document).ready(function () {
        let currentSlide = $('.stories__slider').slick('slickCurrentSlide');
        if (currentSlide == 0) {
            $('.prev-stories').css('backgroundImage', 'url("../icons/arrow-left.svg")');
            $('.next-stories').css('backgroundImage', 'url("../icons/arrow-right.svg")');
        }
    });
    // $(document).ready(function () {
    //     let currentSlide = $('.stories__slider').slick('slickCurrentSlide');
    //     if (currentSlide == 0) {
    //         $('.prev-stories').hide();
    //     }
    // });
    // $('.stories__slider').on('afterChange', function () {
    //     let currentSlide = $('.stories__slider').slick('slickCurrentSlide');
    //     if (currentSlide == 0) {
    //         $('.prev-stories').hide();
    //         $('.next-stories').show();
    //     } else if (currentSlide == 1 && currentSlide < 2) {
    //         $('.next-stories').show();
    //         $('.prev-stories').show();
    //     } else if (currentSlide == 2) {
    //         $('.next-stories').hide();
    //     }
    // });
    // $(document).ready(function () {
    //     let currentSlide = $('.stories__slider').slick('slickCurrentSlide');
    //     if (currentSlide == 0) {
    //         $('.prev-stories').hide();
    //     }
    // });

    //slider reviews
    $('.reviews__slider').slick({
        prevArrow: '<button type="button" class="prev-reviews"></button>',
        nextArrow: '<button type="button" class="next-reviews"></button>',
        slidesToShow: 1,
        slideToScroll: 1,
        variableWidth: true,
        mobileFirst: true,
        variableWidth: true,
        infinite: false,
        speed: 900,
    });

    //изменение состояния стрелок слайдера в блоке "reviews"
    $(document).ready(function () {
        let currentSlide = $('.reviews__slider').slick('slickCurrentSlide');
        if (currentSlide == 0) {
            $('.prev-reviews').css('backgroundImage', 'url("../icons/prev-arrowgray.svg")');
            $('.next-reviews').css('backgroundImage', 'url("../icons/next-arrowgold.svg")');
        }
    });

    $('.reviews__slider').on('afterChange', function () {
        let currentSlide = $('.reviews__slider').slick('slickCurrentSlide');
        if (currentSlide == 0) {
            $('.prev-reviews').css('backgroundImage', 'url("../icons/prev-arrowgray.svg")');
        } else if (currentSlide == 3) {
            $('.next-reviews').css('backgroundImage', 'url("../icons/next-arrowgray.svg")');
        } else if (currentSlide == 1 && currentSlide < 3) {
            $('.prev-reviews').css('backgroundImage', 'url("../icons/prev-arrow.svg")');
            $('.next-reviews').css('backgroundImage', 'url("../icons/next-arrowgold.svg")');
        }


    });

});