import { createApp } from 'vue'
import App from './components/02.start/App.vue'
import './index.css'
import router from './components/02.start/router'

const app = createApp(App)
//掛載路由模組
app.use(router)
app.mount('#app')
