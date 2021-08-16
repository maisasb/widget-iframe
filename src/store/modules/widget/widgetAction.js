import * as types from "./mutationTypes";
import WidgetService from "../../../services/widget";
import { RECURRENCE_TIME, REACTIVATION_TIME, DELAY_TIME } from "../../../consts/time";

export default {
  hide({ commit }) {
    commit(types.SET_SHOW, false);
  },
  show({ commit }) {
    commit(types.SET_SHOW, true);
  },
  setToken({ commit }, token) {
    commit(types.SET_TOKEN, token);
  },
  setCustomer({ commit }, customer) {
    commit(types.SET_CUSTOMER, customer);
  },
  setMode({ commit }, mode) {
    commit(types.SET_MODE, mode);
  },
  setMinimized({ commit, dispatch }, minimized) {
    commit(types.SET_MINIMIZED, minimized);
    dispatch("setDeclinedAt");
  },
  async postMessage({ commit, state, dispatch }, message) {
    await WidgetService.postMessage(state.token, state.customer, message);
    commit(types.SET_SHOW, false);
    dispatch("setAnsweredAt");
  },
  canShowWidget({ state, dispatch }) {
    const widgetStorage = getStorage(state.token);
    if (widgetStorage) {
      if (widgetStorage.answered_at) {
        // Check days of response is more than condition
        if (!checkDate(widgetStorage.answered_at, RECURRENCE_TIME)) return;
      }
      if (widgetStorage.declined_at) {
        // Check days of decline is more than condition
        if (!checkDate(widgetStorage.declined_at, REACTIVATION_TIME)) return;
      }
    }
    const delay = DELAY_TIME || 0;
    setTimeout(() => {
      dispatch("show");
    }, delay * 1000);

    dispatch("setShowAt");
  },
  setShowAt({ state }) {
    const widgetStorage = getStorage(state.token);
    if (!widgetStorage) {
      setStorage({ show_at: new Date().getTime() }, state.token);
    }
  },
  setDeclinedAt({ state }) {
    const widgetStorage = getStorage(state.token);
    if (!widgetStorage) {
      return;
    }
    widgetStorage.declined_at = new Date().getTime();
    setStorage(widgetStorage, state.token);
  },
  setAnsweredAt({ state }) {
    const widgetStorage = getStorage(state.token);
    if (!widgetStorage) {
      return;
    }
    widgetStorage.answered_at = new Date().getTime();
    setStorage(widgetStorage, state.token);
  }
};

/**
 * Set widgetStorage in localStorage
 * show_at = timestamp that widget was view by user
 * answered_at = timestamp that user answer the widget
 * @param {widgetStorage} widgetStorage
 */
const setStorage = (widgetStorage, token) => {
  localStorage.setItem(token, JSON.stringify(widgetStorage));
};
/**
 * Get widgetStorage in localStorage
 */
const getStorage = (token) => {
  const widgetStorage = JSON.parse(localStorage.getItem(token));
  return widgetStorage;
};

const checkDate = (valueCheck, days) => {
  let date = new Date(valueCheck);
  date.setDate(date.getDate() + days);
  if (new Date().getTime() < date.getTime()) {
    return false;
  }
  return true;
};
