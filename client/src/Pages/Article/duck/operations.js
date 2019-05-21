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
    const { data } = await axios.get("/articles");
    // if success
    dispatch(getArticlesSuccess(data.articles));
  } catch (error) {
    // if error
    dispatch(getArticlesError(error));
  }
};
