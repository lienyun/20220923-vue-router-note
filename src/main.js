import { createApp } from 'vue'
import App from './components/06.guard/App.vue'
import './index.css'
import router from './components/06.guard/router'

const app = createApp(App)
//掛載路由模組
app.use(router)
app.mount('#app')
