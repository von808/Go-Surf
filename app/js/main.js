$(function () {

    $('.header__slider').slick({
      infinite: true,
      fade: true,
      prevArrow: '<img class="slider__arrows slider__arrows-left" src="images/arrow-left.svg" alt="">',
      nextArrow: '<img class="slider__arrows slider__arrows-right" src="images/arrow-right.svg" alt="">',
      asNavFor: '.slider-dots',
    });
    $('.slider-dots').slick({
      slidesToShow: 4,
      slidesToScroll: 4,
      asNavFor: '.header__slider-for',
    });

    $('.surf-slider').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      focusOnSelect: true,
      prevArrow: '<img class="slider__arrows slider__arrows-left" src="images/arrow-left.svg" alt="">',
      nextArrow: '<img class="slider__arrows slider__arrows-right" src="images/arrow-right.svg" alt="">',
      asNavFor: '.surf-slider__map',
    });
    $('.surf-slider__map').slick({
      slidesToShow: 8,
      slidesToScroll: 1,
      arrows: false,
      focusOnSelect: true,
      asNavFor: '.surf-slider',
    });

})