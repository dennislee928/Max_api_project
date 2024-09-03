import { createApp } from 'vue' // 確保使用解構賦值方式匯入

import App from './App.vue'
import router from './router' // 確保匯入 router

const app = createApp(App)

app.use(router) // 使用 router
app.mount('#app')
