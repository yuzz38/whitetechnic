


// burger 
$('.header__burger').click(function(e){
    e.preventDefault();
    $('.header__top').slideToggle();
  })
  $('.header__close').click(function(e){
    e.preventDefault();
    $('.header__top').slideToggle();
  })

// default swiper   
const swiper = new Swiper('.swipersale', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
  spaceBetween: 30,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 30,
      // Navigation arrows
      
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    
    700: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    1600: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  },
  });
