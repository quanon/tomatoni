import Vue from 'vue';
import App from './App';
import '../node_modules/semantic-ui-css/semantic.css';
import store from './vuex/store';
import Notification from './notification';

if (Notification.isSupported) {
  Notification.requestPermission();
}

/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  template: '<App/>',
  components: { App }
});
