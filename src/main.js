import Vue from 'vue';
import App from './App';
import store from './vuex/store';
import Notification from './utils/notification';
import './assets/stylesheets/global.scss';
import '../node_modules/semantic-ui-css/semantic.css';

if (Notification.isSupported) Notification.requestPermission();

/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  template: '<App/>',
  components: { App }
});
