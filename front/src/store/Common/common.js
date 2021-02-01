import axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';
import VueAxios from 'vue-axios';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

Vue.use(Vuex);
Vue.use(VueAxios, axios);
const state = () => {
  return {
    parcel_list: [],
    parcel_free_slots: [],
    parcel_tanks_list: [],
    exported_tanks_list: [],
    delivered_tanks_list: [],
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
