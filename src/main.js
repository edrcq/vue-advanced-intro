import '@babel/polyfill'
import 'dotenv/config'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

import { authRepository, ui, importModules } from './core'

console.log(importModules)
importModules({ store })

Vue.use(ui, {
  oneOption: 'Hello'
})

Vue.config.devtools = true
Vue.config.performance = true
Vue.config.productionTip = false

new Vue({
  provide: { authRepository },
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
