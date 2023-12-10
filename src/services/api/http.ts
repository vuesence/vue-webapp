// import axios from "axios";
// import type { AxiosRequestConfig } from "axios";
// import HttpRequest from "./xhr";

interface IOptions {
  baseUrl: string
  headers?: Record<string, string>
  token?: Function
  logout?: Function
}

let options: IOptions = null;

const http = {

  setOptions(_options) {
    options = _options;
  },

  async post(data: any, uri: string) {
    if (options.token()) {
      options.headers.Authorization = `Bearer ${options.token()}`;
    }
    return postFetch(data, uri);
    // return postXhr(data, uri);
    // return postAxios(data, uri);
  },

  async get(url) {
    try {
      return fetch(url)
        .then(response => response.json());
    } catch (error) {
      console.log(error);
    }
  },

};

async function postFetch(data: any, uri: string) {
  const url = uri.startsWith("http") ? uri : `${options.baseUrl}${uri}`;
  return fetch(url, {
    method: "POST",
    headers: options.headers,
    // credentials: "include",
    body: JSON.stringify(data),
  })
    .then(response => response.json());
}

// Uncomment, if you are using `XMLHttpRequest`

// async function postXhr(data: any, uri: string) {
//   const xhr = new HttpRequest("POST", `${options.baseUrl}${uri}`, "application/json", options.headers);
//   xhr.xhr.withCredentials = true;
//   const response = await xhr.send(data);
//   return response.json;
// }

// Uncomment, if you are using `axios`

// async postAxios(data: any, uri: String) {
//   const config: AxiosRequestConfig = {
//     method: "POST",
//     url: `${options.baseUrl}${uri}`,
//     data,
//     withCredentials: true,
//     headers: options.headers,
//   };
//   try {
//     return await axios.request(config);
//   } catch (error) {
//     console.log(error);
//   }
// },

export default http;
