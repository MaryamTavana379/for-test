const App = Vue.createApp({
  data() {
    return {
      name: "Maryam Tavana",
      job: "Front-end dev",
      age: 23,
    };
  },
  methods: {
    changeTitle(newName) {
      this.name= newName
    },
  },
});

App.mount("#app");
