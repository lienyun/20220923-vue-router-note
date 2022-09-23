<template>
  <h1>vue-router的高階使用</h1>
  <hr>
  <!-- 聲明路由連結 -->
  <router-link to="/home">首頁</router-link>&nbsp;
  <router-link to="/movie/1">電影1</router-link>&nbsp;
  <router-link to="/movie/2">電影2</router-link>&nbsp;
  <router-link to="/movie/3">電影3</router-link>&nbsp;

  <router-link to="/about">關於</router-link>
  <hr>
  <!-- 路由佔位符 -->
  <router-view></router-view>
</template>

<script>
export default {
  name: 'MyApp'
}
</script>

<style>

</style>