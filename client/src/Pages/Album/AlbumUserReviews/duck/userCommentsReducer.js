import { GET_USER_COMMENTS_SUCCESS } from "./actionTypes";

const initialValue = null;

export default (state = initialValue, { type, payload }) => {
  switch (type) {
    case GET_USER_COMMENTS_SUCCESS:
      return payload.data;
    default:
      return state;
  }
};
