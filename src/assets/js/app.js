'use strict';

/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}


/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
  document.body.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);



/* swiper hero */
var swiper = new Swiper(".hero-slider", {
  spaceBetween: 20,
  effect: "fade",
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  centeredSlides: true,
  autoplay: {
     delay: 4500,
     disableOnInteraction: false,
  },
});

/*==================== SWIPER offer ====================*/

var swiper = new Swiper(".offer__container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  spaceBetween: 44,
  coverflowEffect: {
    rotate: 0,
    depth: 150,
  },
  breakpoints: {
    640: {
      spaceBetween: 70
    }
  },
    autoplay: {
     delay: 4500,
     disableOnInteraction: false,
  },
});
/*==================== SWIPER FOLLOW ====================*/

var swiper = new Swiper(".follow__container", {
  // effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  spaceBetween: 44,
  // coverflowEffect: {
  //   rotate: 0,
  //   depth: 150,
  // },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  //   autoplay: {
  //    delay: 4500,
  //    disableOnInteraction: false,
  // },
});