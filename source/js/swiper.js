function initSwiperFinances() {
  const swiper = new Swiper('.swiper-finances', {
    speed: 450,
    effect: 'coverflow',
    rewind: true,
    pagination: {
      el: '.finances-pagination',
      type: 'progressbar',
    },
    updateOnWindowResize: true,
    spaceBetween: 20,
    breakpoints: {
      200: {
        slideToClickedSlide: true,
        coverflowEffect: {
          rotate: 60,
          stretch: 14,
          depth: 500,
          scale: 0.7,
          modifier: 1,
          slideShadows: false,
        },
        allowTouchMove: true,
      },
      768: {
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 0,
          modifier: 0,
          slideShadows: false,
        },
        allowTouchMove: false,
        spaceBetween: 0,
      },
    },
  })
}

function initSwiperInvest() {
  const swiper = new Swiper('.swiper-invest', {
    speed: 450,
    effect: 'coverflow',
    rewind: true,
    pagination: {
      el: '.invest-pagination',
      type: 'progressbar',
    },
    updateOnWindowResize: true,
    spaceBetween: 20,
    breakpoints: {
      200: {
        slideToClickedSlide: true,
        coverflowEffect: {
          rotate: 60,
          stretch: 14,
          depth: 500,
          scale: 0.7,
          modifier: 1,
          slideShadows: false,
        },
        allowTouchMove: true,
      },
      768: {
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 0,
          modifier: 0,
          slideShadows: false,
        },
        allowTouchMove: false,
        spaceBetween: 0,
      },
    },
  })
}

function initSwiperReasons() {
  const swiper = new Swiper('.swiper-reasons', {
    speed: 450,
    effect: 'coverflow',
    rewind: true,
    pagination: {
      el: '.reasons-pagination',
      type: 'progressbar',
    },
    updateOnWindowResize: true,
    spaceBetween: 20,
    breakpoints: {
      200: {
        slideToClickedSlide: true,
        coverflowEffect: {
          rotate: 60,
          stretch: 14,
          depth: 500,
          scale: 0.7,
          modifier: 1,
          slideShadows: false,
        },
        allowTouchMove: true,
      },
      768: {
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 0,
          modifier: 0,
          slideShadows: false,
        },
        allowTouchMove: false,
        spaceBetween: 0,
      },
    },
  })
}

function initSwiperSteps() {
  const swiper = new Swiper('.swiper-steps', {
    speed: 450,
    effect: 'coverflow',
    rewind: true,
    pagination: {
      el: '.steps-pagination',
      type: 'progressbar',
    },
    updateOnWindowResize: true,
    spaceBetween: 20,
    breakpoints: {
      200: {
        slideToClickedSlide: true,
        coverflowEffect: {
          rotate: 60,
          stretch: 14,
          depth: 500,
          scale: 0.7,
          modifier: 1,
          slideShadows: false,
        },
        allowTouchMove: true,
      },
      768: {
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 0,
          modifier: 0,
          slideShadows: false,
        },
        allowTouchMove: false,
        spaceBetween: 0,
      },
    },
  })
}

function initSwiperDesktop() {
  const swiper = new Swiper('.swiper-desktop', {
    speed: 550,
    rewind: true,
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.desktop-pagination',
      type: 'bullets',
      clickable: true,
    },
    navigation: {
      prevEl: '.button-prev',
      nextEl: '.button-next',
    },
    breakpoints: {
      200: {
        spaceBetween: 10,
        slidesPerView: 1,
      },
      768: {
        spaceBetween: 10,
        slidesPerView: 1,
      },
      1024: {
        spaceBetween: 20,
        slidesPerView: 1,
      },
      1400: {
        spaceBetween: 20,
        slidesPerView: 1,
      },
    },
  })
}

$(document).ready(function () {
  initSwiperFinances()
  initSwiperInvest()
  initSwiperReasons()
  initSwiperSteps()
  initSwiperDesktop()
})
