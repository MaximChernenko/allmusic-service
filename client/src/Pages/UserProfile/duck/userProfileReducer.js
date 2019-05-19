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
      return [
        ...state,
        { ...payload.defaultUserSett, id: payload.defaultUserSett._id }
      ];
    case UPDATE_USER_SETTINGS_SUCCESS:
      return state.map(userSett =>
        userSett._id === payload.userSettings._id
          ? { ...payload.userSettings, id: payload.userSettings._id }
          : userSett
      );
    default:
      return state;
  }
}
