import "./assets/styles/home.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import Swiper from "swiper/bundle";

// hero section slider
new Swiper(".mySwiper", {
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// product section slider
new Swiper(".product__swiper", {
  slidesPerView: 3.5,
  spaceBetween: 30,
  centeredSlides: false,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// exhibition section slider
new Swiper(".exhibition__swiper", {
  slidesPerView: 1.5,
  spaceBetween: 50,
  effect: "coverflow",
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    // stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    1500: {
      slidesPerView: 2,
      spaceBetween: 300,
    },
  },
});
