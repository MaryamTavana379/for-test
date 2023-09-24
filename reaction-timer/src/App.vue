<template>
  <div>
    <h1>Reaction timer</h1>
    <button class="btn" @click="start" :disabled="isplaying">start</button>
    <Resault v-if="showScore" :score="score"  />
    <Block v-if="isplaying" :delay="delay" @end="endTime" />
  </div>
</template>


<script >
import Block from './components/Block.vue';
import Resault from './components/Resault.vue';
export default {
  name: 'App',
  components: {Block , Resault},
  data(){
    return{
      delay: null,
      isplaying: false,
      score: null,
      showScore: false
    }
  },
  methods:{
    start(){
      this.delay = 2000+ Math.random()*5000;
      this.isplaying = !this.isplaying
      this.showScore = false
    },
    endTime(reaction){
      this.score = reaction
      this.isplaying = false
      this.showScore = true
    }
  }

};
</script>

<style >
body{
  text-align: center;
}
.btn{
  background-color: #0faf87;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  padding: 8px 16px;

}
.btn[disabled]{
  opacity: 0.2;
  cursor: not-allowed;
}
</style>
