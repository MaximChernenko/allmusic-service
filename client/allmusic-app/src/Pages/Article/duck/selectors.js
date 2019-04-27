import { createSelector } from "reselect";

const getArticles = state => state.articles;

const getArticlesArr = createSelector(
  [getArticles],
  articles => {
    const keys = Object.keys(articles);
    return keys.map(id => articles[id]);
  }
);

const getArticleById = createSelector(
  [getArticles, (state, id) => id],
  (articles, id) => articles[id]
);

export default { getArticlesArr, getArticleById };
