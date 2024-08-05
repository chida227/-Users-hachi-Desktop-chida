

const swiper = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 20,
    centeredSlides : true,
    autoplay: {
                delay: 5000,
                disableOnInteraction: false,
        },
    speed: 800,
    effect: "slide",
    touchStartPreventDefault:false,
    passiveListeners:false,
    pagination: {
        el: '.swiper-pagination',
        clickable: true 
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
    1024: {
        slidesPerView: 4,
        spaceBetween: 20
        }
    },

    });