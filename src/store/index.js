import Vuex from "vuex";
import Vue from "vue";
import widget from "./modules/widget/";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    widget
  }
});
export default store;
