const app = Vue.createApp({
  data() {
    return {
      x: 0,
      y: 0,
    };
  },
  methods: {
    mouseEvent(e) {
       console.log(e)
    },
    mouseMove(e){
        this.x = e.offsetX
        this.y = e.offsetY
    }
  },
});

app.mount("#app");
