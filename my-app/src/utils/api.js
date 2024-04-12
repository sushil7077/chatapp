import axios from "axios";
// import Cookies from "js-cookie";

const API_BASE_URL = process.env.REACT_APP_BACKENDURL;

export const api = {
  get: (url, params) =>
    axios.get(API_BASE_URL + url, {
      //   headers: {
      //     token: Cookies.get("token"),
      //   },
      ...params,
    }),
  post: (url, data) =>
    axios.post(API_BASE_URL + url, data, {
      //   headers: {
      //     //   token: Cookies.get("token"),
      //     // Accept: "*/*",
      //     "Content-Type": "application/json",
      //   },
    }),
  patch: (url, data) =>
    axios.patch(API_BASE_URL + url, data, {
      //   headers: {
      //     token: Cookies.get("token"),
      //   },
    }),
  delete: (url) =>
    axios.delete(API_BASE_URL + url, {
      //   headers: {
      //     token: Cookies.get("token"),
      //   },
    }),
};
