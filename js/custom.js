$(function () {
  "use strick"

  // backtotop js

  $(".backtotop i").on('click', function () {
    $("html,body").animate({
      scrollTop: 0
    }, 1200)
  })

  $(window).on('scroll', function () {
    let scrolling = $(this).scrollTop()

    if (scrolling > 20) {
      $(".backtotop i").fadeIn(500)
    } else {
      $(".backtotop i").fadeOut(500)
    }


    if (scrolling > 50) {
      $(".menu").addClass("menu_ex")
    } else {
      $(".menu").removeClass("menu_ex")
    }
  })




  $('.brand_img').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1600,
    arrows:false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  
  
  
  $('.service_slider_main').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1600,
    dots:true,
    arrows:false,
  });



  $('.solution_slider_main').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1600,
    arrows:false,
  });



  $('.gal_slider_main').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1800,
    arrows:false,
  });





















})