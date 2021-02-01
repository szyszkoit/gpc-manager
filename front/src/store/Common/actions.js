import axios from 'axios';
import Vue from "vue";

const loadParcelTanksList = (context, payload) => {
  axios.get(`${context.rootState.api_url}parcel/get-parcel-tanks/${payload.id}`, {
    headers: {
      Authorization: context.rootState.authentication.token,
    //   apitoken: context.rootState.apitoken,
    //   clientbrowser: Vue.clientbrowser,
    },
  })
    .then((result) => {
      context.commit('SAVE_PARCEL_TANKS_LIST', {data: result.data, id: payload.id-1});
    })
    .catch(() => {
      // console.log(error);
    });
};
const loadParcelList = (context) => {
  axios.get(`${context.rootState.api_url}parcel/get-parcel-list`, {
    headers: {
      Authorization: context.rootState.authentication.token,
    },
  })
    .then((result) => {
      context.commit('SAVE_PARCEL_LIST', result.data);
      context.commit('SAVE_FREE_PARCEL_SLOTS', result.data);
    })
    .catch(() => {
    });
};
const loadActiveTanksList = (context) => {
  axios.get(`${context.rootState.api_url}tank/get-tanks-list`, {
    headers: {
      Authorization: context.rootState.authentication.token,
    //   apitoken: context.rootState.apitoken,
    //   clientbrowser: Vue.clientbrowser,
    },
  })
    .then((result) => {
      context.commit('SAVE_TANKS_LIST', result.data);
    })
    .catch(() => {
      // console.log(error);
    });
};
const loadExportedTanksList = (context) => {
  axios.get(`${context.rootState.api_url}tank/get-exported-tanks`, {
    headers: {
      Authorization: context.rootState.authentication.token,
    //   apitoken: context.rootState.apitoken,
    //   clientbrowser: Vue.clientbrowser,
    },
  })
    .then((result) => {
      context.commit('SAVE_EXPORTED_TANKS_LIST', result.data);
    })
    .catch(() => {
      // console.log(error);
    });
};
const loadDeliveredTanksList = (context, payload) => {
  axios.post(`${context.rootState.api_url}tank/get-delivered-tanks`, payload, {
    headers: {
      Authorization: context.rootState.authentication.token,
    //   apitoken: context.rootState.apitoken,
    //   clientbrowser: Vue.clientbrowser,
    },
  })
    .then((result) => {
      context.commit('SAVE_DELIVERED_TANKS_LIST', result.data);
    })
    .catch(() => {
      // console.log(error);
    });
};
const addTank = (context, payload) => {
  axios.post(`${context.rootState.api_url}tank/add`, payload, {
    headers: {
      Authorization: context.rootState.authentication.token,
    //   clientbrowser: Vue.clientbrowser,
    },
  })
  .then(result => {
    const data = {
      slotId: payload.slotId,
      name: payload.name,
      id: result.data.insertId,
      backgroundColor: result.data.backgroundColor,
    }

    context.commit('ADD_TANK_TO_PARCEL', {data, id: payload.parcelId-1})
    Vue.notify({
      group: 'foo',
      type:'success',
      title: 'Sukces!',
      text: 'Zbiornik został dodany.'
    })
    // context.dispatch('common/loadParcelList', null, {root:true})
    // set auth header
    // axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  })
  .catch(() => {
    Vue.notify({
      group: 'foo',
      type:'error',
      title: 'Błąd.',
      text: 'Nie można dodać zbiornika.'
    })
  });
};
const editTank = (context, payload) => {
  axios.post(`${context.rootState.api_url}tank/edit`, payload, {
    headers: {
      Authorization: context.rootState.authentication.token,
    //   clientbrowser: Vue.clientbrowser,
    },
  })
  .then(() => {
    context.commit('EDIT_TANK_IN_PARCEL', {data: payload, id: payload.parcelId-1})
    Vue.notify({
      group: 'foo',
      type:'success',
      title: 'Sukces!',
      text: 'Zaktualizowano.'
    })
  })
  .catch(() => {
    Vue.notify({
      group: 'foo',
      type:'error',
      title: 'Błąd.',
      text: 'Operacja nieudana'
    })
  });
};
const exportTank = (context, payload) => {
  axios.post(`${context.rootState.api_url}tank/export`, payload, {
    headers: {
      Authorization: context.rootState.authentication.token,
    },
  })
  .then(() => {

    context.commit('EXPORT_TANK_FROM_PARCEL', {data: payload, id: payload.parcelId-1});
    Vue.notify({
      group: 'foo',
      type:'success',
      title: 'Sukces!',
      text: 'Zbiornik jest w trasie.'
    })
  })
  .catch(() => {
    // Vue.notify({
    //   group: 'foo',
    //   type:'error',
    //   title: 'błąd',
    //   text: 'Operacja nieudana.'
    // })
  });
};
const deliverTank = (context, payload) => {
  axios.post(`${context.rootState.api_url}tank/deliver`, payload, {
    headers: {
      Authorization: context.rootState.authentication.token,
    },
  })
  .then(() => {
    Vue.notify({
      group: 'foo',
      type:'success',
      title: 'Sukces!',
      text: 'Dostarczono.'
    })
  })
  .catch(() => {
    Vue.notify({
      group: 'foo',
      type:'error',
      title: 'Błąd.',
      text: 'Operacja nieudana.'
    })
  });
};
const moveTank = (context, payload) => {
  axios.post(`${context.rootState.api_url}tank/move`, payload, {
    headers: {
      Authorization: context.rootState.authentication.token,
    },
  })
  .then(() => {
    Vue.notify({
      group: 'foo',
      type:'success',
      title: 'Sukces!',
      text: 'Przeniesiono.'
    })
  })
  .catch(() => {
    Vue.notify({
      group: 'foo',
      type:'error',
      title: 'Błąd.',
      text: 'Operacja nieudana.'
    })
  });
};

export default {
  loadParcelList,
  loadParcelTanksList,
  loadActiveTanksList,
  loadExportedTanksList,
  loadDeliveredTanksList,
  addTank,
  editTank,
  exportTank,
  deliverTank,
  moveTank,
};
