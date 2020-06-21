window.addEventListener('DOMContentLoaded', () => {
    // Slider
    const slides = document.querySelectorAll('.carousel-item');
    const indicators = document.querySelectorAll('[data-target="Indicators"]');
    let currentSlide = 0;
    let slideInterval = setInterval(slide, 5000);

    function slide() {
        slides[currentSlide].classList.remove('active');
        indicators[currentSlide].classList.remove('i_active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
        indicators[currentSlide].classList.add('i_active');
    }


    // Hamburger menu
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu__active');
    });

    // Heading animations
    const latestTitle = document.querySelector('.latest__title');
    const trendingTitle = document.querySelector('.trending__title');
    const blogTitle = document.querySelector('.blog__title');

    function isVisible(elem) {
        return elem.getBoundingClientRect().top;
    }

    window.addEventListener('scroll', () => {
        if (isVisible(latestTitle) <= 300) {
            latestTitle.classList.add('animated_title');
        }
        
        if (isVisible(trendingTitle) <= 300) {
            trendingTitle.classList.add('animated_title');
        }

        if (isVisible(blogTitle) <= 300) {
            blogTitle.classList.add('animated_title');
        }
    });

});


