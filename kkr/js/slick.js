$('.icon-section').slick({
  dots: true,
  infinite: true,
  autoplay: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplaySpeed: 1500,
  arrows: true,
  responsive: [
    {
      breakpoint: 815,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
  ]
});


// slider on the eight section

$('.command_quotes').slick({
  infinite: true,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplaySpeed: 4500,
  prevArrow: ".arrow-prev",
  nextArrow: ".arrow-next",
  centerPadding: '50px',
  cssEase: 'ease-in-out'
})


