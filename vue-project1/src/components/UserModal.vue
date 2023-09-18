<template>
  <div class="backdrop" @click.self="closeModal">
    <div class="modal" :class="{ sale: theme === 'sale' }">
      <slot></slot>
      <div class="action">
        <slot name="links"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['theme'],
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>

<style >
.backdrop {
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
}
.modal {
  width: 400px;
  margin: 10rem auto;
  background-color: white;
  border-radius: 10px;
  padding: 50px;
}
.modal p{
  margin-bottom: 40px;
}
.modal .action a {
  text-decoration: none ;
  border: 1px solid rgb(185, 180, 180);
  margin:  10px;
  padding: 10px;
}
</style>