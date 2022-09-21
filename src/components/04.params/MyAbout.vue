<template>
  <h1>about</h1>
  <hr>
  <!-- 子路由連結 -->
  <router-link to="/about/tab1">tab1</router-link>&nbsp;
  <!-- &nbsp：讓連結之間有間距 -->
  <router-link to="/about/tab2">tab2</router-link>


  <router-view></router-view>
</template>

<script>
  export default {
    name: 'MyAbout'
  }
</script>

<style></style>