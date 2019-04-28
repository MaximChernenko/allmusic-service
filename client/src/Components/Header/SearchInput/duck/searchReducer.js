import { SEARCH_DATA, SEARCH_CLEAR } from "./actionTypes";

const initialValue = "";

const searchReducer = (state = initialValue, { type, payload }) => {
  switch (type) {
    case SEARCH_DATA:
      return payload.filter;
    case SEARCH_CLEAR:
      return initialValue;
    default:
      return state;
  }
};

export default searchReducer;
