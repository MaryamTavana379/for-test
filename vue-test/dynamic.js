const app = Vue.createApp({
  data() {
    return {
      showUser: true,
      users: [
        { name: "Maryam Tavna", job: "Front-end dev", img: "./img/6.jpg", isFav: false},
        { name: "Maryam Rahimi", job: "Back-end dev", img: "./img/5.jpg",  isFav: true  },
        { name: "Maryam Zarei", job: "Front-end dev", img: "./img/7.jpg",  isFav: true  },
      ],
    };
  },
  methods: {
    showClick() {
      this.showUser = !this.showUser;
    },
    favClick(user){
      user.isFav = !user.isFav 
    }
  },
  computed: {
    filterUsers(){
      return this.users.filter(user => user.isFav)
    }
  }
});

app.mount("#app");
