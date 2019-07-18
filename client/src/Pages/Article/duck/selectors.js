import { createSelector } from "reselect";
import * as R from "ramda";

const getArticles = state => state.articles;

const getArticleById = createSelector(
  [getArticles, (state, id) => id],
  (articles, id) => R.find(article => article._id === id)(articles)
);

export default { getArticles, getArticleById };
