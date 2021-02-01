import Vue from 'vue';
import App from './App.vue';
import router from './router.js';
import store from './store';
import './registerServiceWorker';
import vuetify from './plugins/vuetify';
import MultiFiltersPlugin from './plugins/MultiFilters' // <-- THIS
import '@mdi/font/css/materialdesignicons.css';
import axios from 'axios';
import Notifications from 'vue-notification'
import JQuery from 'jquery';

window.$ = JQuery;

Vue.use(Notifications);
Vue.use(MultiFiltersPlugin);

Vue.config.productionTip = false;
axios.defaults.headers.common['Authorization'] = `Bearer ${store.state.token}`;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
