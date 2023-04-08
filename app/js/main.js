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

  $('.holder-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    fade: true,
    prevArrow: '<img class="slider__arrows slider__arrows-left" src="images/arrow-left.svg" alt="">',
    nextArrow: '<img class="slider__arrows slider__arrows-right" src="images/arrow-right.svg" alt="">',
  });

  // $('.sleep-slider').slick({
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   infinite: true,
  //   fade: true,
  //   prevArrow: '<img class="slider__arrows slider__arrows-left" src="images/arrow-left.svg" alt="">',
  //   nextArrow: '<img class="slider__arrows slider__arrows-right" src="images/arrow-right.svg" alt="">',
  // });

  $('.shop-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    fade: true,
    prevArrow: '<img class="slider__arrows slider__arrows-left" src="images/arrow-left.svg" alt="">',
    nextArrow: '<img class="slider__arrows slider__arrows-right" src="images/arrow-right.svg" alt="">',
  });

  $('<div class="quantity-nav"><div class="quantity-button quantity-up"><img class="star" src="images/plus.svg" alt="plus"></div><div class="quantity-button quantity-down"><img class="star" src="images/minus.svg" alt="minus"></div></div>').insertAfter('.quantity input');
  $('.quantity').each(function () {
    var spinner = $(this),
      input = spinner.find('input[type="number"]'),
      btnUp = spinner.find('.quantity-up'),
      btnDown = spinner.find('.quantity-down'),
      min = input.attr('min'),
      max = input.attr('max');

    btnUp.click(function () {
      var oldValue = parseFloat(input.val());
      if (oldValue >= max) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue + 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

    btnDown.click(function () {
      var oldValue = parseFloat(input.val());
      if (oldValue <= min) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue - 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });
  });

  // var parents = $(this).parents('.holder-slider');
  // let summ = ($('.guests', parents).val() * $('.summ', parents).data('nights')) * $('.nights', parents).val();
  // $('.summ', parents).html('$' + summ.toFixed(2));

  $('.quantity').on('click', function () {
    var parents = $(this).parents('.slick-current');
    let summ = ($('.guests', parents).val() * $('.summ', parents).data('nights')) * $('.nights', parents).val();
    $('.summ', parents).html('$' + summ.toFixed(2));
  });

  let summ = ($('.guests').val() * $('.summ').data('nights')) * $('.nights').val();
  $('.summ').html('$' + summ.toFixed(2));

  // $('.quantity-button').on('click', function(){
  //   let summ = ($('.guests').val() * $('.summ').data('nights')) * $('.nights').val();
  //   $('.summ').html('$' + summ.toFixed(2));
  // });

  $('.surfboard-box__circle').on('click', function(){
    $(this).toggleClass('active')
  })

})