import {
  GET_ADVANCED_SEARCH_RESULT,
  ADVANCED_SEARCH_RESET
} from "./actionTypes";

const initialState = null;

const advancedSearchReducer = (
  state = initialState,
  { type = initialState, payload }
) => {
  switch (type) {
    case GET_ADVANCED_SEARCH_RESULT:
      return payload.data;
    case ADVANCED_SEARCH_RESET:
      return initialState;
    default:
      return state;
  }
};

export default advancedSearchReducer;
