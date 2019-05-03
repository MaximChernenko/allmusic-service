import axios from "axios";

axios.defaults.baseURL = "http://localhost:4040";

export const setAuthHeader = token => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  axios.defaults.headers.common["Authorization"] = null;
};
