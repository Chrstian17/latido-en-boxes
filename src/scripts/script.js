const swiperShop = new Swiper('.swiper.swiper--shop', {
  direction: 'horizontal',
  loop: true,
slidesPerView: 1.2, 

spaceBetween: 12,
autoHeight: false,

   // Todo lo que sea responsive va AQUÍ dentro
  breakpoints: {
    420: {
      slidesPerView: 1.2, // Un poco de la siguiente foto para invitar a deslizar
    centeredSlides: true,
     spaceBetween: 12,
    },
   
      767: {
      slidesPerView: 1.5,
      spaceBetween: 12,
    },
     1200: {
      slidesPerView: 2.4,
      spaceBetween: 12,
    },
  },


  navigation: {
    // Asegúrate de que estas clases existan en tu HTML
    nextEl: '.swiper--shop .is-next', 
    prevEl: '.swiper--shop .is-prev',
  },


});

const swiperAbout = new Swiper('.swiper.swiper--about', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  spaceBetween: 12,

  // Todo lo que sea responsive va AQUÍ dentro
  breakpoints: {
    420: {
      slidesPerView: 1.2, 
    centeredSlides: true,
     spaceBetween: 12,
    },
   
      767: {
      slidesPerView: 1.5,
      spaceBetween: 12,
    },
     1200: {
      slidesPerView: 2.4,
      spaceBetween: 12,
    },
  },


  navigation: {
    // Asegúrate de que estas clases existan en tu HTML
    nextEl: '.swiper--about .is-next', 
    prevEl: '.swiper--about .is-prev',
  },


});

const swiperAdoptions = new Swiper('.swiper.swiper--adoptions', {
  direction: 'horizontal',
  loop: true,
  
  spaceBetween: 12,
  

   // Todo lo que sea responsive va AQUÍ dentro
  breakpoints: {
    420: {
      slidesPerView: 1.2, // Un poco de la siguiente foto para invitar a deslizar
    centeredSlides: true,
     spaceBetween: 12,
    },
   
      767: {
      slidesPerView:3 ,
      spaceBetween: 12,
    },
     1200: {
      loop: true,
      slidesPerView: 3,
      spaceBetween: 12,
      centeredSlides: false,
    },
  },


  navigation: {
    // Asegúrate de que estas clases existan en tu HTML
    nextEl: '.swiper-outer .is-next', 
    prevEl: '.swiper-outer .is-prev',
  },


});






