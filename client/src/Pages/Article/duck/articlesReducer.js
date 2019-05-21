import { GET_ARTICLES } from "./actionTypes";

const initialState = [];

const articleReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ARTICLES:
      return payload.articles;
    default:
      return state;
  }
};

export default articleReducer;
