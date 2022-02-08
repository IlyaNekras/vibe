"use strict"

document.addEventListener('DOMContentLoaded', function () {

    //показать/скрыть menu
    let menu = document.querySelector('.menu'),
        menuItem = document.querySelectorAll('.menu__item'),
        burger = document.querySelector('.header__burger');

    document.addEventListener('click', hideMenu);

    function hideMenu(e) {
        if (!e.target.closest('.header__burger') && !e.target.closest('.menu')) {
            menu.classList.remove('menu--active');
            burger.classList.remove('header__burger--active');
        }
    }
    burger.addEventListener('click', function () {
        burger.classList.toggle('header__burger--active');
        menu.classList.toggle('menu--active');
    });

    menuItem.forEach(function (i) {
        i.addEventListener('click', function () {
            menu.classList.remove('menu--active');
            burger.classList.remove('header__burger--active');
        });
    });


    //POPUP
    let playBtn = document.querySelector('.time__btn'),
        popup = document.querySelector('.popup'),
        closePopup = document.querySelectorAll('.close'),
        video = document.querySelector('.popup__video'),
        map = document.querySelector('.popup__map'),
        mapBtn = document.querySelector('.plan__phone-map'),
        thanks = document.querySelector('.popup__thanks'),
        body = document.querySelector('body');

    document.addEventListener('click', hide);

    function hide(event) {
        if (event.target.closest('.popup') && !event.target.closest('.popup__video') && !event.target.closest('.popup__map') && !event.target.closest('.popup__application') && !event.target.closest('.popup__thanks')) {
            hidePopup();
        }
    }

    function hidePopup() {
        popup.classList.remove('popup--active');
        body.classList.remove('active');
        map.classList.remove('popup__map--active');
        video.classList.remove('popup__video--active');
        application.classList.remove('popup__application--active');
        thanks.classList.remove('popup__thanks--active');
        stopVideo();
    }

    closePopup.forEach(function (i) {
        i.addEventListener('click', hidePopup);
    });

    function openPopup() {

        popup.classList.add('popup--active');
        body.classList.add('active');

        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
        body.style.paddingRight = '0';
        }
    }

    //воспроизведение видео в POPUP
    playBtn.addEventListener('click', function () {
        video.classList.add('popup__video--active');
        openPopup();
    });

    //открытие карты в POPUP
    mapBtn.addEventListener('click', function () {
        map.classList.add('popup__map--active');
        openPopup();
    });

    //открытие формы при нажатии на кнопку
    let btn = document.querySelectorAll('.btn-form'),
        application = document.querySelector('.popup__application'),
        form = document.querySelectorAll('form');

    function showForm() {
        application.classList.add('popup__application--active');
        openPopup();
    }

    btn.forEach(function (e) {
        e.addEventListener('click', showForm);
    });

    //открытие окна thanks

    function send(e) {
        e.preventDefault();
        e.target.reset();
        application.classList.remove('popup__application--active');
        thanks.classList.add('popup__thanks--active');
        openPopup();
    }
    form.forEach(function (i) {
        i.addEventListener('submit', send);
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
    let overlayCustomer = document.getElementById('overlay-revcustomer'),
        overlayTenant = document.getElementById('overlay-revtenant'),
        tenantID = document.getElementById('tenant'),
        customerID = document.getElementById('customer'),
        tenant = document.querySelector('.tenant'),
        customer = document.querySelector('.customer'),
        tab1 = document.getElementById('tab-1'),
        tab2 = document.getElementById('tab-2');


    function stopAudio() {
        let audio = document.querySelectorAll('audio');

        audio.forEach(function (e) {
            e.pause();
        });
    }

    function stopVideo() {
        let video = document.querySelectorAll('video');

        video.forEach(function (e) {
            e.pause();
        });
    }

    customer.addEventListener('click', function (e) {
        e.preventDefault();
        tab1.classList.remove('reviews__item--active');
        tab2.classList.add('reviews__item--active');
        tenantID.classList.remove('active');
        customerID.classList.add('active');
        stopAudio();
        stopVideo();
        overlayTenant.classList.remove('video-overlay--active');
    });
    tenant.addEventListener('click', function (e) {
        e.preventDefault();
        tab1.classList.add('reviews__item--active');
        tab2.classList.remove('reviews__item--active');
        tenantID.classList.add('active');
        customerID.classList.remove('active');
        stopVideo();
        stopAudio();
        overlayCustomer.classList.remove('video-overlay--active');
    });

    //вoспроизведение видео 
    let overlay = document.querySelectorAll('.video-overlay');

    function playContent() {
        this.classList.add('video-overlay--active');
    }

    overlay.forEach(function (e) {
        e.addEventListener('click', playContent);
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

    //контент при прокрутке слайдера в location
    $('.location__slider').on('afterChange', function () {
        let currentSlide = $('.location__slider').slick('slickCurrentSlide');
        if (currentSlide == 0) {
            $('.prev').css({
                'backgroundImage': 'url("../icons/arrow-left.svg")',
                'transform': 'rotate(0deg)'
            });
            $('.next').css('backgroundImage', 'url("../icons/arrow-right.svg")');
            $('.location__video-2, #overlay-loc2').removeClass('video-overlay--active').trigger('pause');

        } else if (currentSlide == 1) {
            $('.next').css('backgroundImage', 'url("../icons/arrow-rightgray.svg")');
            $('.prev').empty('<img src="icons/arrow-left.svg">');
            $('.prev').css({
                'backgroundImage': 'url("../icons/arrow-right.svg")',
                'transform': 'rotate(180deg)'
            });
            $('.location__video-1, #overlay-loc1').removeClass('video-overlay--active').trigger('pause');
        }
    });
    $(document).ready(function () {
        let currentSlide = $('.location__slider').slick('slickCurrentSlide');
        if (currentSlide == 0) {
            $('.prev').css('backgroundImage', 'url("../icons/arrow-left.svg")');
            $('.next').css('backgroundImage', 'url("../icons/arrow-right.svg")');
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

    //slider reviews
    $('.reviews__slider').slick({
        prevArrow: '<button type="button" class="prev-reviews"></button>',
        nextArrow: '<button type="button" class="next-reviews"></button>',
        slidesToShow: 1,
        slideToScroll: 1,
        variableWidth: true,
        infinite: false,
        speed: 900,
    });

    //изменение состояния стрелок слайдера в блоке "reviews"
    $(document).ready(function () {
        let currentSlide = $('.reviews__slider').slick('slickCurrentSlide');
        if (currentSlide == 0) {
            $('.prev-reviews').css('backgroundImage', 'url("../icons/prev-arrowgray.svg")');
            $('.next-reviews').css('backgroundImage', 'url("../icons/next-arrow.svg")');
        }
    });

    $('.reviews__slider').on('afterChange', function () {
        let currentSlide = $('.reviews__slider').slick('slickCurrentSlide');
        if (currentSlide == 0) {
            $('.prev-reviews').css('backgroundImage', 'url("../icons/prev-arrowgray.svg")');
        } else if (currentSlide == 3) {
            $('.next-reviews').css('backgroundImage', 'url("../icons/next-arrowgray.svg")');
        } else if (currentSlide == 1 || currentSlide < 3) {
            $('.prev-reviews').css('backgroundImage', 'url("../icons/prev-arrow.svg")');
            $('.next-reviews').css('backgroundImage', 'url("../icons/next-arrow.svg")');
        }
    });
});