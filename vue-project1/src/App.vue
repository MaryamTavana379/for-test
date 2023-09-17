<template>
  <UserModal/>
  <h1>{{ title }}</h1>
  <input type="text" ref="name" />
  <button @click="inputHandler">Click</button>
</template>

<script>
import UserModal from './components/UserModal.vue'
export default {
  name: "App",
  components:{UserModal},
  data() {
    return {
      title: "This is a test text!!!!!!",
    };
  },
  methods: {
    inputHandler() {
      this.$refs.name.classList.add("mari");
    },
  },
};
</script>

<style>
body{
  margin: 0;
}
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
