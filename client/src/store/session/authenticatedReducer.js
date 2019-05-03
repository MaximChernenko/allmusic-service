import * as actionTypes from "./actionTypes";

export default (state = false, { type }) => {
  switch (type) {
    case actionTypes.SIGN_UP_SUCCESS:
    case actionTypes.SIGN_IN_SUCCESS:
    case actionTypes.REFRESH_CURRENT_USER_SUCCESS:
      return true;

    case actionTypes.SIGN_UP_ERROR:
    case actionTypes.SIGN_IN_ERROR:
    case actionTypes.SIGN_OUT_SUCCESS:
      return false;

    default:
      return state;
  }
};
