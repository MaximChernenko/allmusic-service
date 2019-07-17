import axios from "axios";

export const signUp = credentials => axios.post("/auth/signup", credentials);

export const createDefaultUserSettings = userSettDefaults =>
  axios.post("/user/userSettings", userSettDefaults);

export const signIn = credentials => axios.post("/auth/signin", credentials);

export const signOut = () => axios.post("/auth/signout");

export const refreshCurrentUser = () => axios.get("/auth/current");
