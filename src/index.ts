import Vue from 'vue'
import router from './config/router'
import * as ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'highlight.js/scss/vs2015.scss'
import './style/index.scss'
import app from './view/app.vue'
Vue.use(ElementUI)
new Vue({
  components: {
    app
  },
  template: '<app />',
  el: '#app',
  router
})