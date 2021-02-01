import axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';
import VueAxios from 'vue-axios';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

Vue.use(Vuex);
Vue.use(VueAxios, axios);
const getDefaultState = () => {
  return {
    token: '',
    user: {},
    secretContent: '',
    user_groups_list: '',
    users_list: '',
  };
}
const state = getDefaultState();

export default {
  namespaced: true,
  getDefaultState,
  state,
  getters,
  actions,
  mutations,
};
