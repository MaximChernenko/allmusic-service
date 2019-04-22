import React from "react";
import { Link } from "react-router-dom";
// options
import articleItems from "../../../options/articles";
// Components
import ArticleList from "./ArticleList/ArticleList";
// styles
import s from "./articleBox.module.css";

const ArticleBox = () => (
  <div className={s.wrapper}>
    <div className={s.inner}>
      <h2 className={s.title}>Articles</h2>
      <Link className={s.link} to="/articles">
        All articles
      </Link>
    </div>
    <ArticleList articles={articleItems} />
  </div>
);

export default ArticleBox;
