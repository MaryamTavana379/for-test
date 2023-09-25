<template>
    <!-- header  -->
    <header class="hero">
    <!-- navbar menu -->
    <div class="nav" id="navigation">
      <!-- rightside items on the navbar  -->
      <ul class="nav__list--right">
        <a href="#" class="nav__item active"> خانه </a>
        <a href="#" class="nav__item"> محصولات </a>
        <a href="#" class="nav__item"> گالری </a>
        <a href="#" class="nav__item"> وبلاگ </a>
        <a href="#" class="nav__item"> درباره ما </a>
      </ul>
      <div class="hamburger">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
      <div class="nav__logo">
        <img src="./src/assets/pic/Logo1.png" />
      </div>
      <!-- left side items on the navbar -->
      <ul class="nav__list--left">
        <img src="./src/assets/icon/phone.png" />
        <img src="./src/assets/icon/search.png" />
      </ul>
    </div>

    <!-- swiper slider -->
    <div class="swiper mySwiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide swiper__slide swiper__slide1">
          <div class="swiper__slide__container">
            <h1 class="swiper__title">بهترین ساعت ها</h1>
            <p class="swiper__subtitle">را از ما بخواهید</p>
            <hr class="swiper__line" />
            <button class="btn swiper__btn">تماس با ما</button>
          </div>
        </div>
        <div class="swiper-slide swiper__slide swiper__slide2">
          <div class="swiper__slide__container">
            <h1 class="swiper__title">بهترین ساعت ها</h1>
            <p class="swiper__subtitle">را از ما بخواهید</p>
            <hr class="swiper__line" />
            <button class="btn swiper__btn">تماس با ما</button>
          </div>
        </div>
        <div class="swiper-slide swiper__slide swiper__slide3">
          <div class="swiper__slide__container">
            <h1 class="swiper__title">بهترین ساعت ها</h1>
            <p class="swiper__subtitle">را از ما بخواهید</p>
            <hr class="swiper__line" />
            <button class="btn swiper__btn">تماس با ما</button>
          </div>
        </div>
      </div>

      <div class="swiper-button-next swiperbtn__next"></div>
      <div class="swiper-button-prev swiperbtn__prev"></div>
    </div>
  </header>
</template>

<script>
// import AppHeader from "../sections/AppHeader.vue";
export default {
  // components: { AppHeader },
};
</script>

<style>
</style>