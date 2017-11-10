import Vue from 'vue'
import Index from './index.vue'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  template: '<Index/>',
  components: { Index }
})
