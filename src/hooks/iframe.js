import store from "../store";

export default function useIframeControl() {
  function getTokenKey() {
    const query = new URLSearchParams(window.location.search);
    const apiKey = query.get("key") ?? "TESTE_DEV";
    store.dispatch("widget/setToken", apiKey);
  }

  function updateDataListener() {
    window.addEventListener("message", (event) => {
      if (!event.data.isWidget) return;

      if (event.data.customer) {
        console.log(event.data.customer);
        store.dispatch("widget/setCustomer", event.data.customer);
      }
      if (event.data.mode) {
        store.dispatch("widget/setMode", event.data.mode);
      }
    });
  }

  return {
    updateDataListener,
    getTokenKey
  };
}
