const SET_TOKEN = (state, token) => {
    state.token = token;
  };
const SET_USER = (state, user) => {
    state.user = user;
  };
const SET_SECRET_CONTENT = (state, secretContent) => {
  state.secretContent = secretContent;
};
const SAVE_USER_GROUPS_LIST = (state, payload) => {
  state.user_groups_list = payload;
};
const SAVE_USERS_LIST = (state, payload) => {
  state.users_list = payload;
};
const RESET = state => {
    state.secretContent = '';
    state.user = {};
    state.token = '';
  }
  export default {
    SET_TOKEN,
    SET_USER,
    SET_SECRET_CONTENT,
    SAVE_USER_GROUPS_LIST,
    SAVE_USERS_LIST,
    RESET,
  };
