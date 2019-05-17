import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080";

export const setAuthHeader = token => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  axios.defaults.headers.common["Authorization"] = null;
};
