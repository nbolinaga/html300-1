
import Vue from 'vue'
import App from './app.vue'

Vue.config.productionTip = false

export const bus = new Vue();

new Vue({
  render: h => h(App)
}).$mount("#app");