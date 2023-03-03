const nav_button = document.querySelector('.nav-button-burger');
const menu_container = document.getElementById('menu-container');
let menuOpen = false;
nav_button.addEventListener('click', () => {
    if (!menuOpen) {
        nav_button.classList.add('open');
        menuOpen = true;
        menu_container.style.top = '3rem';
    } else {
        nav_button.classList.remove('open');
        menuOpen = false;
        menu_container.style.top = '-10rem';
    }
});
