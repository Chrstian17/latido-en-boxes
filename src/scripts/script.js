const swiperTienda = new Swiper('.swiper.swiper-tienda', {
  direction: 'horizontal',
  loop: true,
slidesPerView: 1.2, 
centeredSlides: true,
spaceBetween: 12,
autoHeight: false,

  // Todo lo que sea responsive va AQUÍ dentro
  breakpoints: {
    420: {
      slidesPerView: 1.2, // Un poco de la siguiente foto para invitar a deslizar
      centeredSlides: true,
       spaceBetween: 12,
    },
    640: {
      slidesPerView: 2.4,
      spaceBetween: 12,
      centeredSlides: false,
      
    }
  },


  navigation: {
    // Asegúrate de que estas clases existan en tu HTML
    nextEl: '.swiper-tienda .is-next', 
    prevEl: '.swiper-tienda .is-prev',
  },


});

const swiperInicial = new Swiper('.swiper.swiper-inicial', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  spaceBetween: 12,

  // Todo lo que sea responsive va AQUÍ dentro
  breakpoints: {
    420: {
      slidesPerView: 1.2, // Un poco de la siguiente foto para invitar a deslizar
    centeredSlides: true,
     spaceBetween: 12,
    },
    640: {
      slidesPerView: 2.4,
      spaceBetween: 20,
    }
  },


  navigation: {
    // Asegúrate de que estas clases existan en tu HTML
    nextEl: '.swiper-inicial .is-next', 
    prevEl: '.swiper-inicial .is-prev',
  },


});

const swiperFull = new Swiper('.swiper.swiper-full', {
  direction: 'horizontal',
  loop: true,
  
  spaceBetween: 12,
  centeredSlides: true,

  // Todo lo que sea responsive va AQUÍ dentro
  breakpoints: {
    420: {
      slidesPerView: 1.2, // Un poco de la siguiente foto para invitar a deslizar
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 12,
      
    }
  },


  navigation: {
    // Asegúrate de que estas clases existan en tu HTML
    nextEl: '.swiper-full .is-next', 
    prevEl: '.swiper-full .is-prev',
  },


});