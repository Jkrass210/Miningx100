import { handleResize } from './module/handleResize.js';
import { toggleDropdown } from './module/toggleDropdown.js';
import { toggleSearch } from './module/toggleSearch.js';
import { toggleBurger } from './module/toggleBurger.js';
import { responsiveSwiper } from './module/responsiveSwiper.js';
import { testimonials } from './module/testimonials.js';
import { animationReview } from './module/animationReview.js';
import { initToggleTabs } from './module/initToggleTabs.js';
import { setupFormValidation } from './module/setupFormValidation.js';
import { gridAnimation } from './module/gridAnimation.js';
//import { iconAnimation } from './module/iconAnimation.js';
import { topLineFixed } from './module/topLineFixed.js';
import { dropDown1 } from './module/dropDown1.js';
import { catalogSticky } from './module/catalogSticky.js';
import { initMobileSwiper } from './module/initMobileSwiper.js';
import { initAnchorNavigation } from './module/initAnchorNavigation.js';
import { initStickyAnchor } from './module/initStickyAnchor.js';
import { initSwipers } from './module/initSwipers.js';
import { initTabs } from './module/initTabs.js';
import { initTabsBox } from './module/initTabsBox.js';
import { cryptoAnimation } from './module/cryptoAnimation.js';
import { animationLine } from './module/animationLine.js';
import { openModalStopScroll } from './module/openModalStopScroll.js';
import { placeholderEffect } from './module/placeholderEffect.js';
import { catalogPageFixed } from './module/catalogPageFixed.js';
import { initFixedCardInfo } from './module/initFixedCardInfo.js';
import { initModals } from './module/initModals.js';
import { initRatingStars } from './module/initRatingStars.js';


if (document.querySelector(".search1") && document.querySelector(".header__box-search") && document.querySelector(".header__hidden-mob")) {
  const btn = document.querySelector(".search1");
  const topSection = document.querySelector(".header__box-search");
  const mobileHidden = document.querySelector(".header__hidden-mob");
  handleResize(mobileHidden, btn, topSection, 1500)
  window.addEventListener("resize", () => handleResize(mobileHidden, btn, topSection, 1500));
}

if (document.querySelector(".nav1") && document.querySelector(".header__nav-wrapp") && document.querySelector(".burger-menu__box-nav1")) {
  const btn = document.querySelector(".nav1");
  const topSection = document.querySelector(".header__nav-wrapp");
  const mobileHidden = document.querySelector(".burger-menu__box-nav1");
  handleResize(mobileHidden, btn, topSection, 1030)
  window.addEventListener("resize", () => handleResize(mobileHidden, btn, topSection, 1030));
}

if (document.querySelector(".nav2") && document.querySelector(".footer__top-end") && document.querySelector(".footer__top-centre")) {
  const btn = document.querySelector(".nav2");
  const topSection = document.querySelector(".footer__top-end");
  const mobileHidden = document.querySelector(".footer__top-centre");
  handleResize(mobileHidden, btn, topSection, 1030)
  window.addEventListener("resize", () => handleResize(mobileHidden, btn, topSection, 1030));
}

if (document.querySelector(".header__btn-info-group") && document.querySelector(".header__btn-info-group-wrapp") && document.querySelector(".footer-fixed__box-btn-info-group")) {
  const btn = document.querySelector(".header__btn-info-group");
  const topSection = document.querySelector(".header__btn-info-group-wrapp");
  const mobileHidden = document.querySelector(".footer-fixed__box-btn-info-group");
  handleResize(mobileHidden, btn, topSection, 1030)
  window.addEventListener("resize", () => handleResize(mobileHidden, btn, topSection, 1030));
}

if (document.querySelector(".box-marks__btn") && document.querySelector(".box-marks__wrapp-btn") && document.querySelector(".detailed-reviews__hidden-mobile")) {
  const btn = document.querySelector(".box-marks__btn");
  const topSection = document.querySelector(".box-marks__wrapp-btn");
  const mobileHidden = document.querySelector(".detailed-reviews__hidden-mobile");
  handleResize(mobileHidden, btn, topSection, 1030)
  window.addEventListener("resize", () => handleResize(mobileHidden, btn, topSection, 1030));
}

if (document.querySelectorAll('.drop-bown-catalog')) {
  toggleDropdown('.drop-bown-catalog', '.drop-bown-catalog__btn', '.drop-bown-catalog__box');
}

if (document.querySelectorAll('.search1')) {
  toggleSearch('.search1', '.search1__btn', '.search1__form-wrapp');
}

if (document.querySelector('#burger')) {
  toggleBurger('burger', '.burger-menu');
}

if (document.querySelectorAll('.box-offers__box-products')){
  responsiveSwiper('.box-offers', '.box-offers__box-products', '.box-offers__list');
}

if (document.querySelectorAll('.testimonial')) {
  testimonials()
}

if (document.querySelector('.box-reviews')) {
  animationReview()
}

if (document.querySelector('.box-questions__list-wrapp')) {
  initToggleTabs({
    wrapperSelector: '.box-questions__list-wrapp',
    buttonSelector: '.question__btn',
    contentSelector: '.question__box-answer',
    activeClass: 'active'
  })
}

if (document.querySelectorAll('.drop-down-filter')) {
  initToggleTabs({
    wrapperSelector: '.drop-down-filter',
    buttonSelector: '.drop-down-filter__btn',
    contentSelector: '.drop-down-filter__list',
    activeClass: 'active'
  })
}

if (document.querySelectorAll('.drop-down1')) {
  initToggleTabs({
    wrapperSelector: '.drop-down1',
    buttonSelector: '.drop-down1__btn',
    contentSelector: '.drop-down1__list',
    activeClass: 'active'
  })
}

if (document.querySelectorAll('.box-order__form')) {
  document.querySelectorAll(".box-order__form").forEach(form => {
    setupFormValidation(form, ".box-order__btn");
  });
}

if (document.querySelectorAll('.modal__form')) {
  document.querySelectorAll(".modal__form").forEach(form => {
    setupFormValidation(form, ".modal__submit");
  });
}

if (document.querySelector('.swiper-logo')) {
  animationLine()
  /*const swiperLogo = new Swiper('.swiper-logo', {
    loop: true,
    allowTouchMove: false, // запрет прокрутки мышью/пальцем
    autoplay: {
      delay: 2000, // время между автопрокрутками (в мс)
      disableOnInteraction: false, // не отключать после взаимодействия
      pauseOnMouseEnter: true, // остановка при наведении мышью
    },
    speed: 800, // скорость анимации
    slidesPerView: 6, // если слайды разной ширины, или можно задать число
    spaceBetween: 24, // отступы между слайдами
  });*/
}

if(document.querySelectorAll(".background-semicircle")) {
  document.addEventListener("scroll", () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const maxScroll = 1000; // максимум скролла, до которого увеличивается
    const maxScale = 2; // максимальный масштаб
  
    let scale = 1 + (scrollTop / maxScroll) * (maxScale - 1);
    if (scale > maxScale) scale = maxScale;
  
    const circles = document.querySelectorAll(".background-semicircle");
    circles.forEach((el) => {
      el.style.transform = `translate(-50%, 50%) scale(${scale})`;
    });
  });
}

if(document.getElementById('grid')) {
  gridAnimation()
}

/*if(document.querySelector('.box-hero')) {
  iconAnimation()
}*/

/*if(document.querySelector('.top-line-fixed')) {
  topLineFixed()
}*/

/*if(document.querySelector('.drop-down1')) {
  dropDown1()
}*/

if(document.querySelector('.section-catalog__aside') && document.querySelector('.catalog-top-line')){
  catalogSticky();
}

if (document.querySelector(".box-top-line-catalog__btn-group .search1") && document.querySelector(".box-top-line-catalog__btn-group .left") && document.querySelector(".box-top-line-catalog__btn-group .hidden-mob")) {
  const btn = document.querySelector(".box-top-line-catalog__btn-group .search1");
  const topSection = document.querySelector(".box-top-line-catalog__btn-group .left");
  const mobileHidden = document.querySelector(".box-top-line-catalog__btn-group .hidden-mob");
  handleResize(mobileHidden, btn, topSection, 767)
  window.addEventListener("resize", () => handleResize(mobileHidden, btn, topSection, 767));
}

if(document.querySelectorAll('.box-about-sales__swiper')){
  initMobileSwiper('.box-about-sales__swiper')
}

if(document.querySelectorAll('.box-anchor')){
  initAnchorNavigation(
    '.box-anchor', 
    '.box-questions-answers__list', 0
  );

  initStickyAnchor(
    '.box-questions-answers__container', // Контейнер
    '.box-anchor', // Блок с якорями
    '.box-questions-answers__content', // Контентный блок
    60, // Высота хедера
    20 // Дополнительный отступ
  );
}

if(document.querySelectorAll('.detailed-swiper-container')){
  initSwipers(
    '.detailed-swiper', // Основной слайдер
    '.detailed-swiper-preview', // Слайдер превью
    5 // Количество видимых превью (можно изменить)
  );
}

if(document.querySelectorAll('.detailed-card-sec3')){
  initTabs(
    'detailed-card-sec3__btn', // Класс кнопок
    'detailed-card-sec3__box-content' // Класс блоков контента
  );
}

/*if(document.querySelectorAll('.drop-down-box__swiper')){
  var swiper = new Swiper(".drop-down-box__swiper", {
    direction: "vertical",
    slidesPerView: "auto",
    freeMode: true,
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    mousewheel: true,
  });
}*/

if(document.querySelectorAll('.box-comparison__swiper')){
  new Swiper('.box-comparison__swiper', {
    slidesPerView: 2, // Фиксированное количество видимых слайдов
    spaceBetween: 6, // Отступ 24px между слайдами
    freeMode: true,
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
    //mousewheel: true,
    grabCursor: true,
    navigation: {
      nextEl: ".btn-swiper-comparison-next",
      prevEl: ".btn-swiper-comparison-prev",
    },
    breakpoints: {
      // Адаптация для мобильных устройств
      767: {
        slidesPerView: 2.5,
        spaceBetween: 16,
      },
      1030: {
        slidesPerView: 4,
        spaceBetween: 16,
      },
      1500: {
        slidesPerView: 6,
        spaceBetween: 24,
      }
    }
  });
}

if(document.querySelectorAll('.drop-down-box')){
  initTabsBox('card8__drop-down', 'drop-down-box__btn', 'drop-down-box__content');
}

if(document.querySelector('.box-hero__bottom-wrapp .search1__input')) {
  document.querySelector('.box-hero__bottom-wrapp .search1__input').placeholder = '';

  placeholderEffect()
}

if(document.querySelector('.crypto-box')){
  cryptoAnimation()
}

if(document.querySelector('#openFilter')){
  openModalStopScroll('openFilter')
}

if(document.querySelector('.catalog-page')){
  catalogPageFixed()
}

if(document.querySelectorAll('.card8')){
  initFixedCardInfo()
}

const modals = initModals();

if(document.querySelectorAll('.modal-1')){
  modals.setup(
    'open-modal-1', // класс кнопки открытия
    'modal-1',   // класс модального окна
    'review-modal', // класс контейнера (для закрытия по клику вне)
    'close',  // класс кнопки закрытия (крестика)
    'close-2'
  );
}

if(document.querySelectorAll('.modal-2')){
  modals.setup(
    'open-modal-2', // класс кнопки открытия
    'modal-2',   // класс модального окна
    'consultation-modal', // класс контейнера (для закрытия по клику вне)
    'close',  // класс кнопки закрытия (крестика)
    'close-2'
  );
}

if(document.querySelector('.modal__box-estimation')) {
  initRatingStars('.modal__box-estimation');
}

