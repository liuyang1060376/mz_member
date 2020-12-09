// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import '@/common/adminlte.min.css'
import '@/common/js/adminlte.js'
import store from './store'
import'./../static/font_hpn9p22pi5/iconfont.css'
import './../static/css/reset.css'


Vue.config.productionTip = false
//项目中使用的是axios进行数据请求，在main.js中进行全局设置

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
