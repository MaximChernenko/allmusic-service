import {
  getArticlesError,
  getArticlesSuccess,
  getArticlesFetch
} from "./actions";
import axios from "axios";

export const getArticles = () => async dispatch => {
  // start request
  dispatch(getArticlesFetch());
  try {
    const { data } = await axios.get("http://localhost:3004/articles");
    // if success
    dispatch(getArticlesSuccess(data));
  } catch (error) {
    // if error
    dispatch(getArticlesError(error));
  }
};
