<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
   <!-- this section is after the hero section -->
   <section class="introduction">
    <!-- this section is for icons -->
    <div class="introduction--container">
      <ul>
        <li>
          <p><strong>20+</strong> سال تجربه </p>
        </li>
        <li>
          <p><strong>20+</strong> سال تجربه </p>
        </li>
        <li>
          <p><strong>20+</strong> سال تجربه </p>
        </li>
        <li>
          <p><strong>20+</strong> سال تجربه </p>
        </li>
      </ul>
      <button> درباره ما </button>
    </div>

    <!-- this section is used for image -->
    <div class="introduction--container">
      <img src="./assets/1.jpg" alt="pic1">
    </div>

  </section>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
