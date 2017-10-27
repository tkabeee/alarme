// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  data: {
    now: '',
    hour: '',
    minute: ''
  },

  watch: {
  },

  methods: {
    updateNumber (value) {
      this.hour = value
    }
  },

  beforeCreate: function () {
  },

  created: function () {
  },

  beforeMount: function () {
  },

  mounted: function () {
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
