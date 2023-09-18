<template>
  <h1>{{ title }}</h1>
  <!-- <input type="text" ref="name" /> -->
  <div v-if="showModal">
    <UserModal theme="sale" @close="modalHandler">
      <h1>Hello Mari</h1>
      <p>This is a test for you!!!!!!!!!</p>
      <template v-slot:links>
        <a href="#"> sign up </a>
        <a href="#"> more info </a>
      </template>
    </UserModal>
  </div>
  <button @click.shift="modalHandler">Open Modal (shift)</button>
</template>

<script>
import UserModal from "./components/UserModal.vue";
export default {
  name: "App",
  components: { UserModal },
  data() {
    return {
      showModal: false,
      title: "Welcome",
    };
  },
  methods: {
    // inputHandler() {
    //   this.$refs.name.classList.add("mari");
    // },
    modalHandler() {
      this.showModal = !this.showModal;
    },
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
</style>
