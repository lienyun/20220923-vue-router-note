import { createApp } from 'vue'
import App from './components/07.next/App.vue'
import './index.css'
import router from './components//07.next/router'

const app = createApp(App)
//掛載路由模組
app.use(router)
app.mount('#app')
