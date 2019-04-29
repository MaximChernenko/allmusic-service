import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
// utils
import withScrollToTop from "../../utils/hocs/withScrollToTop";
// redux
import articlesSelectors from "../Article/duck/selectors";

// Components
import Article from "./Article/Article";

// styles
import s from "./articles.module.css";

const ArticlesPage = ({ articles }) => (
  <div className={s.wrapper}>
    <h2 className={s.title}>Articles</h2>
    <ul className={s.list}>
      {articles.map(article => (
        <li className={s.item} key={article.id}>
          <Article id={article.id} content={article.content} />
        </li>
      ))}
    </ul>
  </div>
);

const mapStateToProps = state => ({
  articles: articlesSelectors.getArticlesArr(state)
});

export default compose(
  connect(mapStateToProps),
  withScrollToTop
)(ArticlesPage);
