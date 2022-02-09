import axios from "axios";
import { API_URL } from "../constant";

export default {
  get: (url) => {
    return axios.get(API_URL.apiUrl + url);
  },

  post: (url, req) => {
    console.log("req.body", req);

    return axios.post(API_URL.apiUrl + url, req);
  },
};
