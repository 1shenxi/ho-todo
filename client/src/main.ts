import { createApp } from 'vue'

import "@hoboy/css"

import {install} from './components'

import App from './layout/App.vue'

import router from './router'

const app = createApp(App)

install(app)

app
  .use(router)
  .mount('#app')
