<template>
  <div class="block" v-if="showBlock">Click me !</div>
</template>

<script>
export default {
    props:["delay"],
    data(){
      return{
        showBlock: false
      }
    },
    mounted(){
      console.log("component mounted... ")
      setTimeout(()=>{
        this.showBlock = true;
        console.log(this.delay);
      },this.delay)
    },
    updated(){
    console.log("component updated...")
    
    },
    unmounted(){
      console.log(" component unmounted...")
    }

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