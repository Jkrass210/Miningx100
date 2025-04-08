import { handleResize } from './module/handleResize.js';

if (document.querySelector(".search1") && document.querySelector(".header__box-search") && document.querySelector(".header__hidden-mob")) {
  const btn = document.querySelector(".search1");
  const topSection = document.querySelector(".header__box-search");
  const mobileHidden = document.querySelector(".header__hidden-mob");
  handleResize(mobileHidden, btn, topSection, 1500)
  window.addEventListener("resize", () => handleResize(mobileHidden, btn, topSection, 1500));
}

if (document.querySelector(".header__logo") && document.querySelector(".header__box-logo") && document.querySelector(".header__hidden-logo")) {
  const btn = document.querySelector(".header__logo");
  const topSection = document.querySelector(".header__box-logo");
  const mobileHidden = document.querySelector(".header__hidden-logo");
  handleResize(mobileHidden, btn, topSection, 1500)
  window.addEventListener("resize", () => handleResize(mobileHidden, btn, topSection, 1500));
}