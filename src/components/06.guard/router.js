import { createRouter, createWebHashHistory } from "vue-router";
import Home from './MyHome.vue'
import Movie from './MyMovie.vue'
import About from './MyAbout.vue'

import Tab1 from './tab/MyTab1.vue'
import Tab2 from './tab/MyTab2.vue'


//建立路由實例物件
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {path: '/', redirect: '/home'},
    {path: '/home', component: Home},
    {name: 'mov', path: '/movie/:id', component: Movie, props: true},
    {path: '/about', 
    component: About, 
    redirect: '/about/tab1',
    children: [
      {path: 'tab1', component: Tab1},
      {path: 'tab2', component: Tab2}

    ]},

  ]
})

//聲明全局的路由守衛
router.beforeEach((to, from) => {
  console.log(from)

  console.log('ok')
})

export default router