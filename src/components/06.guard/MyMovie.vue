<template>
  <h1>MyMovie ---{{id}}</h1>
  <hr>
   <button type="button" @click="goBack">上一頁</button>
</template>

<script>
  export default {
    name: 'MyMovie',
    props: ['id'],
    methods: {
      goBack() {
        this.$router.go(-1)
      }
    }
  }
</script>

<style></style>