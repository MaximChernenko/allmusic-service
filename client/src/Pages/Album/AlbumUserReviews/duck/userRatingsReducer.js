import {
  GET_USER_RATINGS_SUCCESS,
  ADD_USER_RATING_SUCCESS,
  PUT_USER_RATING_SUCCESS
} from "./actionTypes";

const initialValue = null;

export default (state = initialValue, { type, payload }) => {
  switch (type) {
    case GET_USER_RATINGS_SUCCESS:
      return payload.data;
    case ADD_USER_RATING_SUCCESS:
      return state && [...state, payload.userRating];
    case PUT_USER_RATING_SUCCESS:
      return (
        state &&
        state.map(item =>
          item.id === payload.userRating.id ? payload.userRating : item
        )
      );
    default:
      return state;
  }
};
