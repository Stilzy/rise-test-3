new Swiper ('.image-slider, card__news', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    slidesPerView: 2.5,
});


document.querySelector('.burger').addEventListener('click',function() {
    this.classList.toggle('active');
    document.querySelector('.header__nav').classList.toggle('open');
});
