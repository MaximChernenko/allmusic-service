import * as actionTypes from "./actionTypes";

export default (state = null, { type, payload }) => {
  switch (type) {
    case actionTypes.SIGN_UP_SUCCESS:
    case actionTypes.SIGN_IN_SUCCESS:
    case actionTypes.REFRESH_CURRENT_USER_SUCCESS:
      return payload.user;

    case actionTypes.SIGN_OUT_SUCCESS:
      return null;

    default:
      return state;
  }
};
