// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/iconfont.css'

// 移动端某些机型上click 300ms点击延迟问题 需要导入一个js包
import fastClick from 'fastclick'

import axios from 'axios'

Vue.prototype.$axios= axios

Vue.config.productionTip = false

fastClick.attach(document.body);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
