import actions from "./widgetAction";
import mutations from "./widgetMutation";
import getters from "./widgetGetter";
import state from "./widgetState";

export default {
  namespaced: true,
  actions,
  state,
  getters,
  mutations
};
