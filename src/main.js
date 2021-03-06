// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify';

import App from './App';
import router from './router';
import store from './store';
import './auth';
import vuetify from './plugins/vuetify';
import '@babel/polyfill'

import('vuetify/dist/vuetify.min.css');

Vue.use(Vuetify);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  vuetify,
  components: { App }
})
