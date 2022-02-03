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
        popupApplication.classList.remove('popup__application--active');
        popupThanks.classList.remove('popup__thanks--active');
        // document.getElementsByTagName('iframe')[0].remove();
        document.getElementsByTagName('iframe').src = '';
        popup.style.backgroundColor = 'rgba(0,0,0, .8)';
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

    //открытие формы при нажатии на кнопку
    let btn = document.querySelectorAll('.btn-form'),
        popupApplication = document.querySelector('.popup__application');

    function showForm() {
        popupApplication.classList.add('popup__application--active');
        popup.classList.add('popup--active');
        body.classList.add('active');
    }

    btn.forEach(function (e) {
        e.addEventListener('click', showForm);
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
    let tenantID = document.getElementById('tenant'),
        customerID = document.getElementById('customer'),
        tenant = document.querySelector('.tenant'),
        customer = document.querySelector('.customer'),
        tab1 = document.getElementById('tab-1'),
        tab2 = document.getElementById('tab-2');

    customer.addEventListener('click', function (e) {
        e.preventDefault();
        tab1.classList.remove('reviews__item--active');
        tab2.classList.add('reviews__item--active');
        tenantID.classList.remove('active');
        customerID.classList.add('active');
    });
    tenant.addEventListener('click', function (e) {
        e.preventDefault();
        tab1.classList.add('reviews__item--active');
        tab2.classList.remove('reviews__item--active');
        tenantID.classList.add('active');
        customerID.classList.remove('active');
    });

    //автовспроизведение видео 
    let btnTenant = document.getElementById('reviews-btntenant'),
        btnCustomer = document.getElementById('reviews-btncustomer'),
        locBtn1 = document.getElementById('location-btn1'),
        locBtn2 = document.getElementById('location-btn2'),
        overlayLoc1 = document.getElementById('overlay-loc1'),
        overlayLoc2 = document.getElementById('overlay-loc2'),
        overlayCustomer = document.getElementById('overlay-revcustomer'),
        overlayTenant = document.getElementById('overlay-revtenant');

    locBtn1.addEventListener('click', function () {
        document.querySelector('.location__video-1').src = "https://www.youtube.com/embed/dl16e_mG6hg?autoplay=1&mute=1";
        overlayLoc1.classList.add('video-overlay--active');
    });
    locBtn1.addEventListener('touchenter', function () {
        document.querySelector('.location__video-1').src = "https://www.youtube.com/embed/dl16e_mG6hg?autoplay=1&mute=1";
        overlayLoc1.classList.add('video-overlay--active');
    });

    locBtn2.addEventListener('click', function () {
        document.querySelector('.location__video-2').src = "https://www.youtube.com/embed/dl16e_mG6hg?autoplay=1&mute=1";
        overlayLoc2.classList.add('video-overlay--active');
    });

    btnTenant.addEventListener('click', function () {
        document.querySelector('.reviews__video-tenant').src = "https://www.youtube.com/embed/dl16e_mG6hg?autoplay=1&mute=1";
        overlayTenant.classList.add('video-overlay--active');
    });

    btnCustomer.addEventListener('click', function () {
        document.querySelector('.reviews__video-customer').src = "https://www.youtube.com/embed/dl16e_mG6hg?autoplay=1&mute=1";
        overlayCustomer.classList.add('video-overlay--active');
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
            $('.location__video-2, #overlay-loc2').removeClass('video-overlay--active').removeAttr('src');

        } else if (currentSlide == 1) {
            $('.next').css('backgroundImage', 'url("../icons/arrow-rightgray.svg")');
            $('.prev').empty('<img src="icons/arrow-left.svg">');
            $('.prev').css({
                'backgroundImage': 'url("../icons/arrow-right.svg")',
                'transform': 'rotate(180deg)'
            });
            $('.location__video-1, #overlay-loc1').removeClass('video-overlay--active').removeAttr('src');
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

        // responsive: [{
        //         breakpoint: 592,
        //         settings: {
        //             fade: true,
        //             // centerMode: true,
        //         }
        //     },
        //     // {
        //     //   breakpoint: 480,
        //     //   settings: {
        //     //     arrows: false,
        //     //     
        //     //     centerPadding: '40px',
        //     //     slidesToShow: 1
        //     //   }
        //     // }
        // ]
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











    //     //player
    //     function player() {
    //         if (audioTrack.paused) {
    //             audioTrack.play();
    //         } else {
    //             audioTrack.pause();
    //         }
    //     }

    //     function setText(el, text) {
    //         el.innerHTML = text;
    //     }

    //     function finish() {
    //         audioTrack.currentTime = 0;
    //     }

    //     function updatePlayhead() {
    //         playhead.value = audioTrack.currentTime;
    //     }

    //     function setAttributes(el, attrs) {
    //         for (let key in attrs) {
    //             el.setAttribute(key, attrs[key]);
    //         }
    //     }

    //     let
    //         playback = document.querySelector("#playback"),
    //         audioTrack = document.querySelector("#audiotrack"),
    //         playButton = document.createElement("button"),
    //         playhead = document.createElement("progress");

    //     setAttributes(playButton, {
    //         "type": "button",
    //         "class": "button-audio",

    //     });
    //     setAttributes(playhead, {
    //         "class": "progress",

    //     });

    //     playback.appendChild(playButton);
    //     playback.appendChild(playhead);

    //     audioTrack.removeAttribute("controls");
    //     playButton.addEventListener("click", player, false);

    //     audioTrack.addEventListener('playing', function () {
    //         playhead.max = audioTrack.duration;
    //     }, false);
    //     audioTrack.addEventListener('timeupdate', updatePlayhead, false);
    //     audioTrack.addEventListener('ended', finish, false);

});