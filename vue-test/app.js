const App = Vue.createApp({
  data() {
    return {
      show: true,
      name: "Maryam Tavana",
      job: "Front-end dev",
      age: 23,
    };
  },
  methods: {
    changeTitle(newName) {
      this.name = newName;
    },
    showElements(){
        this.show = !this.show
    }
  },
});

App.mount("#app");
