<template>
  <div class="backdrop" @click.self="closeModal">
    <div :class="{hi : theme === 'hi'}">
      <h1> {{ header }}</h1>
      <p>{{ text }} </p>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    closeModal(){
      this.$emit("close")
    }

  },
  props: ['header', 'text','theme']
}
</script>

<style scoped >

.backdrop {
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
}
.hi {
  width: 400px;
  margin:10rem auto;
  background-color: darkcyan;
  border-radius: 10px;
  padding: 50px;
  color: white;
}
.hi h1{
  color: white;
}
</style>