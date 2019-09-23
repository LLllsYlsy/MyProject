import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './assets/css/style.css'
import './assets/css/font.css'
// npm install --save font-awesome
import 'font-awesome/css/font-awesome.min.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
