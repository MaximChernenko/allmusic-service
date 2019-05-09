import {
  GET_ALL_USER_SETTINGS_SUCCESS,
  CREATE_DEFAULT_USER_SETTINGS_SUCCESS,
  UPDATE_USER_SETTINGS_SUCCESS
} from "./actionTypes";

const initialState = [];

export default function userProfileReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case GET_ALL_USER_SETTINGS_SUCCESS:
      return payload.data;
    case CREATE_DEFAULT_USER_SETTINGS_SUCCESS:
      return [...state, payload.defaultUserSett];
    case UPDATE_USER_SETTINGS_SUCCESS:
      return state.map(userSett =>
        userSett.id === payload.userSettings.id
          ? payload.userSettings
          : userSett
      );
    default:
      return state;
  }
}
