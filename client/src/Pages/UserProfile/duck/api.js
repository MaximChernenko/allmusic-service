import axios from "axios";

export const getAllUserSettings = () => axios.get("/user/userSettings");

export const updateUserSettings = (id, body) =>
  axios.put(`/user/userSettings/${id}`, body);
