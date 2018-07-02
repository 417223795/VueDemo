import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'
import './index.css'

let vm = new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>'
})

Vue.use({
  VueResource,
  vm
})
