import {
  GET_USER_COMMENTS_SUCCESS,
  ADD_USER_COMMENT_SUCCESS
} from "./actionTypes";

const initialValue = null;

export default (state = initialValue, { type, payload }) => {
  switch (type) {
    case GET_USER_COMMENTS_SUCCESS:
      return payload.data;
    case ADD_USER_COMMENT_SUCCESS:
      return state && [...state, payload.userComment];
    default:
      return state;
  }
};
