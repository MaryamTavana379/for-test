<template>
  <div class="block">Click me !</div>
</template>

<script>
export default {
    props:["delay"]
};
</script>

<style>
.block {
  width: 400px;
  margin: 40px auto;
  padding: 100px;
  text-align: center;
  background-color: #0faf87;
  color: white;
}
</style>