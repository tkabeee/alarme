// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
var app = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  data: {
    now: '',
    hour: '',
    minute: ''
  },

  watch: {

  },

  beforeCreate: function () {
  },

  created: function () {
  },

  beforeMount: function () {
  },

  mounted: function () {
    console.log(app)
  },

  beforeUpdate: function () {
  },

  updated: function () {
  },

  beforeDestroy: function () {
  },

  destroyed: function () {
  }
})
