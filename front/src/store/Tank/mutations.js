import Vue from 'vue';
const SET_TANK_MANUFACTURER_LIST = (state, tankManufacturerList) => {
  state.tankManufacturerList = tankManufacturerList;
};
const SET_TANK_CAPACITY_LIST = (state, tankCapacityList) => {
  state.tankCapacityList = tankCapacityList;
};
const SET_TANK_OWNER_LIST = (state, tankOwnerList) => {
  state.tankOwnerList = tankOwnerList;
};
const SET_TANK_VALVE_LIST = (state, tankValveList) => {
  state.tankValveList = tankValveList;
};
const SET_ACTIVE_TANK = (state, tankData) => {
  Vue.set(state, 'activeTank', tankData);
  // state.activeTank = tankData;
};

  export default {
    SET_TANK_MANUFACTURER_LIST,
    SET_TANK_CAPACITY_LIST,
    SET_TANK_OWNER_LIST,
    SET_TANK_VALVE_LIST,
    SET_ACTIVE_TANK,
  };
