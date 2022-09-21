import { createRouter, createWebHashHistory } from "vue-router";
import Home from './MyHome.vue'
import Movie from './MyMovie.vue'
import About from './MyAbout.vue'



//建立路由實例物件
const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active-router',
  routes: [
    {path: '/', redirect: '/home'},
    {path: '/home', component: Home},
    {path: '/movie', component: Movie},
    {path: '/about', component: About},

  ]
})

export default router