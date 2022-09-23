<template>
  <h1>MyHome</h1>
  <router-link :to="{ name: 'mov', params: {id: 3}}">go to Movie</router-link>
  <hr>
  <button type="button" @click="goToMovie(1)">go to Movie</button>
</template>

<script>
  export default {
    name: 'MyHome',
    methods: {
      goToMovie(id) {
        this.$router.push({
          name: 'mov',
          params: {
            id: id
          }
        })
      }
    }
    
  }
</script>

<style></style>