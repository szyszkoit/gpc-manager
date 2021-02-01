import axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';
import VueAxios from 'vue-axios';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

Vue.use(Vuex);
Vue.use(VueAxios, axios);

const state = () => ({
  tankManufacturerList: '',
  tankCapacityList: '',
  tankOwnerList: '',
  tankValveList: '',
  activeTank: '',
});

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
