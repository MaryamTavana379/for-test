<template>
  <h1>{{ title }}</h1>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      title: "This is a test text!!!!!!",
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  color: rgb(115, 54, 115);
}
</style>
