import "../assets/styles/main.scss";
import "./hamburger.js";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import Swiper from "swiper/bundle";

// hero section slider
new Swiper(".mySwiper", {
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// product section slider
new Swiper(".product__swiper", {
  slidesPerView: 4.5,
  spaceBetween: 30,
  centeredSlides: false,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1024: {
      slidesPerView: 3.25,
      spaceBetween: 20,
    },
    900: {
      slidesPerView: 3.5,
    },
    768: {
      slidesPerView: 2.75,
    },
    426: {
      slidesPerView: 2.25,
    },
    320: {
      slidesPerView: 1.5,
      centeredSlides: true,
    },
  },
});

// exhibition section slider
new Swiper(".exhibition__swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  spaceBetween:100,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },
  breakpoints:{
    992:{
      spaceBetween: 100
    },
    768:{
      spaceBetween:50
    }
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
