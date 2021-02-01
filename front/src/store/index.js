import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import VueAxios from 'vue-axios';
import common from './Common/common';
import authentication from './Authentication/authentication';
import tank from './Tank/tank';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);
Vue.use(VueAxios, axios);

export default new Vuex.Store({
  plugins: [createPersistedState({
    paths: ['authentication','tank'],
  }
  )],
  strict: 'production',
  state: {
    apitoken: '',
    // eslint-disable-next-line
    api_url: process.env.VUE_APP_API_URL,
  },
  actions: {
    setApiToken({ commit }, payload) {
      commit('SET_API_TOKEN', payload);
    },
  },
  mutations: {
    SET_API_TOKEN(state, apitoken) {
      this.state.apitoken = apitoken;
    },
  },
  modules: {
    authentication,
    common,
    tank,
  },
});
