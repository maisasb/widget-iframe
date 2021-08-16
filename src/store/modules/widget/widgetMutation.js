import * as types from "./mutationTypes";

export default {
  [types.SET_SHOW](state, show) {
    state.show = show;
  },
  [types.SET_CUSTOMER](state, customer) {
    state.customer = customer;
  },
  [types.SET_TOKEN](state, token) {
    state.token = token;
  },
  [types.SET_MODE](state, mode) {
    state.token = mode;
  },
  [types.SET_MINIMIZED](state, minimized) {
    state.minimized = minimized;
  }
};
