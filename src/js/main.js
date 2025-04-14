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
import { iconAnimation } from './module/iconAnimation.js';



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

if (document.querySelectorAll('.box-order__form')) {
  document.querySelectorAll(".box-order__form").forEach(form => {
    setupFormValidation(form, ".box-order__btn");
  });
}

if (document.querySelector('.swiper-logo')) {
  const swiperLogo = new Swiper('.swiper-logo', {
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
  });
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

if(document.querySelectorAll('.debug-area')) {
  iconAnimation()
}


