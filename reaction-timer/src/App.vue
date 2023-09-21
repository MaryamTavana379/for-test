<template>
  <div>
    <h1>Reaction timer</h1>
    <button @click="start" :disabled="isplaying">start</button>
    <Block v-if="isplaying" :delay="delay" />
  </div>
</template>


<script >
import Block from './components/Block.vue';
export default {
  name: 'App',
  components: {Block},
  data(){
    return{
      delay: null,
      isplaying: false,
    }
  },
  methods:{
    start(){
      this.delay = 2000+ Math.random()*5000;
      this.isplaying = !this.isplaying
    }
  }

};
</script>

<style >
body{
  text-align: center;
}
</style>
