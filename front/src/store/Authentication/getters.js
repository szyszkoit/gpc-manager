const isLoggedIn = state => {
    return state.token;
  };
const getUser = state => {
    return state.user;
  }
const getSecretContent = state => {
  return state.secretContent;
}

export default {
  isLoggedIn,
  getUser,
  getSecretContent,
};