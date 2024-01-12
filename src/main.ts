import './assets/main.css'
import 'vue-toastification/dist/index.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Toast, { type PluginOptions } from 'vue-toastification'
import CleaveDirective from '@/directives/mask'

const toastOptions: PluginOptions = {}
const app = createApp(App)
app.use(router)
app.use(store)
app.use(Toast, toastOptions);
app.directive('mask', CleaveDirective)

app.mount('#app')
