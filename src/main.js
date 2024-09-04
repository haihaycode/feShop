import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import './assets/css/base/backgrounds.css'
import './assets/tailwind.css'
import './assets/css/base/animations.css'

const app = createApp(App);

app.use(store)
app.use(router)

app.mount('#app')
