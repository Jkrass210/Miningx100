import { handleResize } from './module/handleResize.js';
import { toggleDropdown } from './module/toggleDropdown.js';
import { toggleSearch } from './module/toggleSearch.js';
import { toggleBurger } from './module/toggleBurger.js';


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

