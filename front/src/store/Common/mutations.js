// const SET_API_TOKEN = (state, apitoken) => {
//   state.apitoken = apitoken;
// }
import Vue from 'vue';
const SAVE_PARCEL_LIST = (state, parcelList) => {
  Vue.set(state, 'parcel_list', parcelList);
};
const SAVE_FREE_PARCEL_SLOTS = (state, parcelList) => {
  const isSlotFree = (slotId, slots) => {
    return slots.find( (slot) => slot.slotId === slotId )
  };
  const freeParcelSlots = JSON.parse(JSON.stringify(parcelList));
  for (let p = 0; p< parcelList.length; p++){
    // freeParcelSlots.push(parcelList[p]);
    freeParcelSlots[p].slots = [];
    for (let i = 1; i <= parcelList[p].size; i++) {
      // console.log(isSlotFree(i, parcelList[p].slots));
      if(isSlotFree(i, parcelList[p].slots) == undefined){
        freeParcelSlots[p].slots.push({'id': i});
      }
    }
  }
  // Vue.set(state, 'free_parcel_slots', freeParcelSlots);
  state.parcel_free_slots = freeParcelSlots;
};
const SAVE_PARCEL_TANKS_LIST = (state, payload) => {
  const parcel_list = state.parcel_list;
  parcel_list[payload.id].slots = payload.data;
  Vue.set(state, 'parcel_list', parcel_list);
};
const ADD_TANK_TO_PARCEL = (state, payload) => {
  const parcel_list = state.parcel_list;
  parcel_list[payload.id].slots.push(payload.data);
  Vue.set(state, 'parcel_list', parcel_list);
};
const EDIT_TANK_IN_PARCEL = (state, payload) => {
  const parcel_list = state.parcel_list;
  parcel_list[payload.id].slots.filter((el)=> {
    if(el.slotId == payload.data.slotId){
      el =payload.data;
    }
  });
  // parcel_list[payload.id].slots(payload.data);
  Vue.set(state, 'parcel_list', parcel_list);
};
const SAVE_TANKS_LIST = (state, payload) => {
  state.tanks_list = payload;
};
const SAVE_EXPORTED_TANKS_LIST = (state, payload) => {
  state.exported_tanks_list = payload;
};
const SAVE_DELIVERED_TANKS_LIST = (state, payload) => {
  for(let i = 0; i < payload.length; i++){
let deliverDate = new Date(payload[i].deliverDate);
    payload[i].deliverDate = deliverDate.toLocaleString();
    payload[i].sortableDeliverDate = deliverDate.toISOString();
  }
  state.delivered_tanks_list = payload;
};
const EXPORT_TANK_FROM_PARCEL = (state, payload) => {
  // const parcel_list = state.parcel_list;
  for(let i = 0; i < state.parcel_list[payload.id].slots.length; i++){
    if(state.parcel_list[payload.id].slots[i].slotId == payload.data.slotId){
      state.parcel_list[payload.id].slots.splice(i,1);
    }
  }
  // Vue.set(state, 'parcel_list', parcel_list);
};
export default {
  SAVE_PARCEL_LIST,
  SAVE_FREE_PARCEL_SLOTS,
  SAVE_PARCEL_TANKS_LIST,
  SAVE_TANKS_LIST,
  SAVE_EXPORTED_TANKS_LIST,
  SAVE_DELIVERED_TANKS_LIST,
  ADD_TANK_TO_PARCEL,
  EDIT_TANK_IN_PARCEL,
  EXPORT_TANK_FROM_PARCEL,
};
