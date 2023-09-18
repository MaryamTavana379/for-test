<template>
 
  <h1>{{ title }}</h1>
  <!-- <input type="text" ref="name" /> -->
  <button @click.shift="modalHandler"> Open Modal (shift) </button>
  <div v-if="modal">
    <UserModal :header="modalTitle" :text="modalTxt" theme="hi" @close="modalHandler" />
  </div>
</template>

<script>
import UserModal from './components/UserModal.vue'
export default {
  name: "App",
  components:{UserModal},
  data() {
    return {
      modal:false,
      title: "Welcome",
      modalTitle: " Hello Mari ",
      modalTxt: " This is a test for you!!!!!!!!! "
    };
  },
  methods: {
    // inputHandler() {
    //   this.$refs.name.classList.add("mari");
    // },
    modalHandler(){
      this.modal = !this.modal
    }
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
  width: fit-content;
  border-bottom: 1px solid black;
  margin: 2rem auto;


}
</style>
