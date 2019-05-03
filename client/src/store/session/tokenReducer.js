import * as actionTypes from "./actionTypes";

export default (state = null, { type, payload }) => {
  switch (type) {
    case actionTypes.SIGN_UP_SUCCESS:
    case actionTypes.SIGN_IN_SUCCESS:
      return payload.token;

    case actionTypes.SIGN_UP_ERROR:
    case actionTypes.SIGN_IN_ERROR:
    case actionTypes.SIGN_OUT_SUCCESS:
      return null;

    default:
      return state;
  }
};
