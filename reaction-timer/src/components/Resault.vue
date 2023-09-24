<template>
  <p>Resualt: {{ score }} ms</p>
  <p class="text"> {{ text }}</p>
</template>

<script>
export default {
    props:['score'],
    data(){
        return{
            text: null
        }
    },
    mounted(){
        if(this.score <200){
            this.text = "Wow, You're great!!!"
        }
        else if(this.score<400){
            this.text = " Not bad!"
        }else{
            this.text = "you're like a Turtle"
        }
    }

}
</script>

<style>
.text{
 font-size: 1.5em;
 font-weight: bold;
 
}

</style>