import { createApp } from 'vue'
import App from './layout/App.vue'

import router from './router'

createApp(App)
  .use(router)
  .mount('#app')
