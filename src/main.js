import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { createPinia } from 'pinia'

const app = createApp(App)    // <- önce app nesnesi oluşturulmalı
const pinia = createPinia()   // <- pinia instance'ı oluşturuluyor
app.use(pinia)                // <- pinia uygulamaya entegre ediliyor
app.mount('#app')             // <- uygulama mount ediliyor