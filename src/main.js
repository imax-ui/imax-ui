import Vue from 'vue'
import App from './App.vue'

import imax from '../packages/index';
Vue.use(imax);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
