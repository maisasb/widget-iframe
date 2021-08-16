const ENDPOINTS = {
  "http://localhost:8080": "http://localhost:4000",
  "https://dev.track.co": "https://dev-api.track.co",
  "https://hmg.track.co": "https://hmg-api.track.co",
  "https://app.track.co": "https://api.track.co"
};

const WIDGET_SCRIPT_ID = "trackwidget-js";

const getHostByScriptData = () => {
  const script = document.getElementById(WIDGET_SCRIPT_ID);
  if (script) {
    const url = new URL(script.src);
    return ENDPOINTS[url.origin];
  }
  return "http://localhost:4000";
};

const HOST = getHostByScriptData();

const http = {
  get: async (url, init) => {
    const response = await fetch(HOST + url, init);
    const json = await response.json();
    return await json.data;
  },
  post: async (url, body, headers) => {
    const myInit = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        ...headers
      },
      body: JSON.stringify(body)
    };

    const response = await fetch(HOST + url, myInit);
    const json = await response.json();
    return await json.data;
  }
};

export default http;
