
$('.btn-right').on('click', function () {
  var currentImage = $('.current');
  var nextImage = $('.current').next();

  if (currentImage.is(':last-child')) {
    currentImage.removeClass('current');
    $('.carousel-imgs div:first-child').addClass('current');
  } else {
    currentImage.removeClass('current');
    nextImage.addClass('current');
  }
});

$('.btn-left').on('click', function () {
  var currentImage = $('.current');
  var prevImage = $('.current').prev();
  if (currentImage.is(':first-child')) {
    currentImage.removeClass('current');
    $('.carousel-imgs div:last-child').addClass('current');
  } else {
    currentImage.removeClass('current');
    prevImage.addClass('current');
  }
  // currentImage.removeClass('current');
  // prevImage.addClass('current');
});
