import axios from 'axios';
// import router from '@/router';
// import Vue from "vue";
const loadTankData = (context, payload) => {
  axios.get(`${context.rootState.api_url}tank/get/${payload.id}`, {
    headers: {
      Authorization: context.rootState.authentication.token,
    //   apitoken: context.rootState.apitoken,
    //   clientbrowser: Vue.clientbrowser,
    },
  })
    .then((result) => {
      context.commit('SET_ACTIVE_TANK', result.data[0]);
    })
    .catch(() => {
      // console.log(error);
    });
};
const getManufacturerList = (context) => {
  axios.get(`${context.rootState.api_url}tank/get-manufacturer-list`, {
    headers: {
      Authorization: context.rootState.authentication.token,
    //   clientbrowser: Vue.clientbrowser,
    },
  })
  .then(result => {
    context.commit('SET_TANK_MANUFACTURER_LIST', result.data);
    // set auth header
    // axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  })
  .catch(() => {});
};
const getCapacityList = (context) => {
  axios.get(`${context.rootState.api_url}tank/get-capacity-list`, {
    headers: {
      Authorization: context.rootState.authentication.token,
    //   clientbrowser: Vue.clientbrowser,
    },
  })
  .then(result => {
    context.commit('SET_TANK_CAPACITY_LIST', result.data);
    // set auth header
    // axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  })
  .catch(() => {});
};
const getOwnerList = (context) => {
  axios.get(`${context.rootState.api_url}tank/get-owner-list`, {
    headers: {
      Authorization: context.rootState.authentication.token,
    //   clientbrowser: Vue.clientbrowser,
    },
  })
  .then(result => {
    context.commit('SET_TANK_OWNER_LIST', result.data);
    // set auth header
    // axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  })
  .catch(() => {});
};
const getValveList = (context) => {
  axios.get(`${context.rootState.api_url}tank/get-valve-list`, {
    headers: {
      Authorization: context.rootState.authentication.token,
    //   clientbrowser: Vue.clientbrowser,
    },
  })
  .then(result => {
    context.commit('SET_TANK_VALVE_LIST', result.data);
    // set auth header
    // axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  })
  .catch(() => {});
};


export default {
  loadTankData,
  getManufacturerList,
  getCapacityList,
  getOwnerList,
  getValveList,
};
