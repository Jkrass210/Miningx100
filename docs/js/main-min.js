import{handleResize}from"./module/handleResize.js";import{toggleDropdown}from"./module/toggleDropdown.js";import{toggleSearch}from"./module/toggleSearch.js";import{toggleBurger}from"./module/toggleBurger.js";if(document.querySelector(".search1")&&document.querySelector(".header__box-search")&&document.querySelector(".header__hidden-mob")){const e=document.querySelector(".search1"),o=document.querySelector(".header__box-search"),r=document.querySelector(".header__hidden-mob");handleResize(r,e,o,1500),window.addEventListener("resize",()=>handleResize(r,e,o,1500))}if(document.querySelector(".nav1")&&document.querySelector(".header__nav-wrapp")&&document.querySelector(".burger-menu__box-nav1")){const e=document.querySelector(".nav1"),o=document.querySelector(".header__nav-wrapp"),r=document.querySelector(".burger-menu__box-nav1");handleResize(r,e,o,1030),window.addEventListener("resize",()=>handleResize(r,e,o,1030))}if(document.querySelector(".nav2")&&document.querySelector(".footer__top-end")&&document.querySelector(".footer__top-centre")){const e=document.querySelector(".nav2"),o=document.querySelector(".footer__top-end"),r=document.querySelector(".footer__top-centre");handleResize(r,e,o,1030),window.addEventListener("resize",()=>handleResize(r,e,o,1030))}if(document.querySelector(".header__btn-info-group")&&document.querySelector(".header__btn-info-group-wrapp")&&document.querySelector(".footer-fixed__box-btn-info-group")){const e=document.querySelector(".header__btn-info-group"),o=document.querySelector(".header__btn-info-group-wrapp"),r=document.querySelector(".footer-fixed__box-btn-info-group");handleResize(r,e,o,1030),window.addEventListener("resize",()=>handleResize(r,e,o,1030))}document.querySelectorAll(".drop-bown-catalog")&&toggleDropdown(".drop-bown-catalog",".drop-bown-catalog__btn",".drop-bown-catalog__box"),document.querySelectorAll(".search1")&&toggleSearch(".search1",".search1__btn",".search1__form-wrapp"),document.querySelector("#burger")&&toggleBurger("burger",".burger-menu");