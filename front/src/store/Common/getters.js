// import { parcel } from "../../../../server/db/sqlMap";

const getParcelList = state => {
  return state.parcel_list;
};
const getFreeParcelSlots = state => () => {
  return state.parcel_free_slots;
};

export default {
  getParcelList,
  getFreeParcelSlots,
};