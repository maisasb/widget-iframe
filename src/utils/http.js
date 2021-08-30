const HOST = "http://widget-host";

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
