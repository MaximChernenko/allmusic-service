import {
  GET_ARTICLES,
  ERROR_GET_ARTICLES,
  FETCH_GET_ARTICLES
} from "./actionTypes";

// getArticles

export const getArticlesFetch = () => ({
  type: FETCH_GET_ARTICLES
});

export const getArticlesSuccess = articles => ({
  type: GET_ARTICLES,
  payload: { articles }
});

export const getArticlesError = error => ({
  type: ERROR_GET_ARTICLES,
  payload: { error }
});
