import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import CleaveDirective from './directives/mask';

const app = createApp(App)
app.use(router)
app.use(store);

app.directive('mask', CleaveDirective)

app.mount('#app')
