<template>
  <h1>MyHome</h1>
  <button type="button" class="btn btn-primary" @click="goToMovie(3)">導頁到Movie</button>
  <hr>
</template>

<script>
  export default {
    name: 'MyHome',
    methods: {
      goToMovie(id) {
        this.$router.push('/movie/' + id)
      }
    }
  }
</script>

<style></style>