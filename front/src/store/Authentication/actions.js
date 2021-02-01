import axios from 'axios';
import router from '@/router';
import Vue from "vue";
const signUp = (context, payload) => {
    axios.post(`${context.rootState.api_url}sign-up`, payload, {
      headers: {
      //   apitoken: context.rootState.apitoken,
      //   clientbrowser: Vue.clientbrowser,
      },
    })
      .then(() => {
        Vue.notify({
          group: 'foo',
          type:'success',
          title: 'Sukces!',
          text: 'Użytkownik został zarejestrowany.'
        })
        // context.commit('SET_TOKEN', token);
        // context.commit('SET_USER', user);
        // // set auth header
        // axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      })
      .catch((error) => {
        Vue.notify({
          group: 'foo',
          type:'error',
          title: 'Błąd',
          text: error.response.data.msg,
        })
      });
  };
  const login = (context, payload) => {
    axios.post(`${context.rootState.api_url}login`, payload, {
      headers: {
      //   apitoken: context.rootState.apitoken,
      //   clientbrowser: Vue.clientbrowser,
      },
    })
      .then((result) => {
        context.commit('SET_TOKEN', result.data.token);
        context.commit('SET_USER', result.data.user);
        router.push('/');
        // context.commit('SET_TOKEN', token);
        // context.commit('SET_USER', user);
        // // set auth header
        axios.defaults.headers.common['Authorization'] = `Bearer ${result.data.token}`;
      })
      .catch((error) => {
        Vue.notify({
          group: 'foo',
          type:'error',
          title: 'Błąd',
          text: error.response.data.msg,
        })
      });
  };
  const editUser = (context, payload) => {
    axios.post(`${context.rootState.api_url}edit-user`, payload, {
      headers: {
        Authorization: context.rootState.authentication.token,
      },
    })
      .then(() => {
        Vue.notify({
          group: 'foo',
          type:'success',
          title: 'Sukces!',
          text: 'Dane użytkownika zostały zmienione.'
        })
      })
      .catch((error) => {
        Vue.notify({
          group: 'foo',
          type:'error',
          title: 'Błąd',
          text: error.response.data.msg,
        })
      });
  };
const getSecretContent = (context) => {
  axios.get(`${context.rootState.api_url}secret-route`, {
    headers: {
      Authorization: context.state.token,
    //   clientbrowser: Vue.clientbrowser,
    },
  })
  .then(result => {
    context.commit('SET_SECRET_CONTENT', result.data);
    // set auth header
    // axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  })
  .catch(() => {});
};
const logout = ({ commit }) => {
    commit('RESET', '');
  };
  const loadUserGroupsList = (context) => {
    axios.get(`${context.rootState.api_url}get-user-groups-list`, {
      headers: {
        Authorization: context.rootState.authentication.token,
      //   apitoken: context.rootState.apitoken,
      //   clientbrowser: Vue.clientbrowser,
      },
    })
      .then((result) => {
        context.commit('SAVE_USER_GROUPS_LIST', result.data);
      })
      .catch(() => {
        // console.log(error);
      });
  };
  const loadUsersList = (context) => {
    axios.get(`${context.rootState.api_url}get-users-list`, {
      headers: {
        Authorization: context.rootState.authentication.token,
      //   apitoken: context.rootState.apitoken,
      //   clientbrowser: Vue.clientbrowser,
      },
    })
      .then((result) => {
        context.commit('SAVE_USERS_LIST', result.data);
      })
      .catch(() => {
        // console.log(error);
      });
  };
export default {
  signUp,
  login,
  editUser,
  getSecretContent,
  logout,
  loadUserGroupsList,
  loadUsersList,
};
