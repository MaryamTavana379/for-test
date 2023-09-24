<template>
  <div class="block" v-if="showBlock" @click="overTime">Click me !</div>
</template>

<script>
export default {
  props: ["delay"],
  data() {
    return {
      showBlock: false,
      timer: null,
      reaction: 0,
    };
  },
  mounted() {
    setTimeout(() => {
      this.showBlock = true;
      this.startTime()
    }, this.delay);
  },
  updated() {
    console.log("component updated...");
  },
  unmounted() {
    console.log(" component unmounted...");
  },
  methods: {
    startTime() {
      this.timer += setInterval(() => {
        this.reaction += 10;
      }, 10);
    },
    overTime() {
      clearInterval(this.timer);
      this.$emit('end', this.reaction)
    },
  },
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