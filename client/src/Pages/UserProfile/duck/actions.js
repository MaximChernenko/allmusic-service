import {
  GET_ALL_USER_SETTINGS_FETCH,
  GET_ALL_USER_SETTINGS_SUCCESS,
  GET_ALL_USER_SETTINGS_ERROR,
  CREATE_DEFAULT_USER_SETTINGS_FETCH,
  CREATE_DEFAULT_USER_SETTINGS_SUCCESS,
  CREATE_DEFAULT_USER_SETTINGS_ERROR,
  UPDATE_USER_SETTINGS_FETCH,
  UPDATE_USER_SETTINGS_SUCCESS,
  UPDATE_USER_SETTINGS_ERROR
} from "./actionTypes";

export const getAllUserSettFetch = () => ({
  type: GET_ALL_USER_SETTINGS_FETCH
});

export const getAllUserSettSuccess = data => ({
  type: GET_ALL_USER_SETTINGS_SUCCESS,
  payload: { data }
});

export const getAllUserSettError = error => ({
  type: GET_ALL_USER_SETTINGS_ERROR,
  payload: { error }
});

export const createDefaultUserSettFetch = () => ({
  type: CREATE_DEFAULT_USER_SETTINGS_FETCH
});

export const createDefaultUserSettSuccess = defaultUserSett => ({
  type: CREATE_DEFAULT_USER_SETTINGS_SUCCESS,
  payload: { defaultUserSett }
});

export const createDefaultUserSettError = error => ({
  type: CREATE_DEFAULT_USER_SETTINGS_ERROR,
  payload: { error }
});

export const updateUserSettFetch = () => ({
  type: UPDATE_USER_SETTINGS_FETCH
});

export const updateUserSettSuccess = userSettings => ({
  type: UPDATE_USER_SETTINGS_SUCCESS,
  payload: { userSettings }
});

export const updateUserSettError = error => ({
  type: UPDATE_USER_SETTINGS_ERROR,
  payload: { error }
});
