import {
  GET_ADVANCED_SEARCH_RESULT,
  ADVANCED_SEARCH_RESET
} from "./actionTypes";

export const getAdvancedSearchResult = data => ({
  type: GET_ADVANCED_SEARCH_RESULT,
  payload: { data }
});

export const advancedSearchReset = () => ({
  type: ADVANCED_SEARCH_RESET
});
