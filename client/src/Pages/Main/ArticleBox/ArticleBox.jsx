import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

// redux
import articleSelectors from "../../Article/duck/selectors";

// Components
import ArticleList from "./ArticleList/ArticleList";
// styles
import s from "./articleBox.module.css";

const ArticleBox = ({ articles }) => (
  <div className={s.wrapper}>
    <div className={s.inner}>
      <h2 className={s.title}>Articles</h2>
      <Link className={s.link} to="/articles">
        All articles
      </Link>
    </div>
    <ArticleList articles={articles} />
  </div>
);

const mapStateToProps = state => ({
  articles: articleSelectors.getArticlesArr(state)
});

export default connect(mapStateToProps)(ArticleBox);
