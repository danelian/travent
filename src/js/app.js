$(document).ready(function () {

  // ------------------------- BURGER MENU ------------------------
  const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.add('show-menu')
      document.querySelector('body').classList.add('dis-scroll')
    })
  }
  if (navClose) {
    navClose.addEventListener('click', () => {
      navMenu.classList.remove('show-menu')
      document.querySelector('body').classList.remove('dis-scroll')
    })
  }
  const navLink = document.querySelectorAll('.nav__list li a')
  const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
    document.querySelector('body').classList.remove('dis-scroll')
  }
  navLink.forEach(n => n.addEventListener('click', linkAction))


  // ------------------------- SWIPER ------------------------
  var swiper = new Swiper(".eventsSwiper", {
    navigation: {
      nextEl: ".eventsbl .swiper-button-next",
      prevEl: ".eventsbl .swiper-button-prev",
    },
    pagination: {
      el: ".eventsbl .swiper-pagination",
      type: "fraction",
      clickable: true,
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
      },
      // when window width is >= 480px
      600: {
        slidesPerView: 2,
      },
      // when window width is >= 640px
      991: {
        slidesPerView: 3,
      },
      // when window width is >= 640px
      1440: {
        grid: {
          rows: 2,
        },
      }
    }
  });

});