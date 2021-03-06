// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 这里是项目的入口文件
import Vue from 'vue'
import App from './App.vue'

import './index.css'

// Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    'App': App
  },
  template: '<App/>'
})
