import { createRouter, createWebHashHistory } from "vue-router";

import Home from './Home.vue'
import Main from './Main.vue'
import Login from './Login.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/' ,redirect: '/home'},
    { path: '/home', component: Home},
    { path: '/main', component: Main},
    { path: '/login', component: Login},

  ]
})

router.beforeEach((to, from, next) => {
  if(to.path === '/main') {
    //使用者要連接後台首頁
    next('/login')
  }else{
    //連接的不是後台首頁
    next()
  }
})
export default router