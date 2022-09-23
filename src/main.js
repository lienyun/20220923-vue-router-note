import { createApp } from 'vue'
import App from './components/05.named/App.vue'
import './index.css'
import router from './components/05.named/router'

const app = createApp(App)
//掛載路由模組
app.use(router)
app.mount('#app')
