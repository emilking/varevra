console.log("pizdec");

$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  prevArrow : "<a class='slider__arrow' href='javascript:void(0)'><i class='fas fa-arrow-left arrow'></i></a>",
  nextArrow : "<a class='slider__arrow' href='javascript:void(0)'><i class='fas fa-arrow-right arrow'></a>",
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
  focusOnSelect: true,
  draggable : false,
  variableWidth : true
});
$('.slider__other-product').slick({
  slidesToShow : 4,
  slidesToScroll : 2,
  variableWidth : true,
  arrows : false
});