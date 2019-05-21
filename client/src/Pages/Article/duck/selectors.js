import { createSelector } from "reselect";

const getArticles = state => state.articles;

const getArticleById = createSelector(
  [getArticles, (state, id) => id],
  (articles, id) => articles.find(article => article._id === id)
);

export default { getArticles, getArticleById };
