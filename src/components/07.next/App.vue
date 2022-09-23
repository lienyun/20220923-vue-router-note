<template>
  <h1>App</h1>

  <router-link to="/home">Home</router-link>&nbsp;
  <router-link to="/main">後台首頁</router-link>
<router-view></router-view>
</template>

<script>
  export default {
    name: 'MyApp'
  }
</script>