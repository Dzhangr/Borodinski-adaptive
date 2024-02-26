const userMenu = document.querySelector(".user-menu__login");
const loginModal = document.querySelector(".login-modal");

userMenu.onclick = function() {
    loginModal.classList.toggle("login-modal--open");
}