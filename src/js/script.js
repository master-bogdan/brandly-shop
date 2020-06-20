window.addEventListener('DOMContentLoaded', () => {
    // Hamburger menu
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu__active');
    });

});


