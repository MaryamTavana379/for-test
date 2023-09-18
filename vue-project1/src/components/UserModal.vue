<template>
  <div class="backdrop">
    <div class="modal">
      <h1>Modal Test</h1>
    </div>
  </div>
</template>

<style scoped >

.backdrop {
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
}
.modal {
  width: 400px;
  margin:10rem auto;
  background-color: white;
  padding: 50px;
}
h1{
  color: blue;
}
</style>