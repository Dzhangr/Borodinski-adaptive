let menuToggle = document.querySelector(".main-nav__toggle");
let mainNav = document.querySelector(".main-nav");
const userMenu = document.querySelector(".user-menu__login");
const loginModal = document.querySelector(".login-modal");
const btnFormClose = document.querySelector(".btn-form-close");
mainNav.classList.remove('main-nav--nojs');

menuToggle.onclick = function() {
    mainNav.classList.toggle('main-nav--open');
    mainNav.classList.toggle('main-nav--close');
}

userMenu.onclick = function() {
    loginModal.classList.toggle("login-modal--open");
}

btnFormClose.onclick = function() {
    loginModal.classList.toggle("login-modal--open");
}