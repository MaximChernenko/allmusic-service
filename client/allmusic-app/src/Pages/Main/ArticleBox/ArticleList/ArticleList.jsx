import React from "react";
import { Link } from "react-router-dom";
// Components
import Article from "./Article/Article";
// styles
import s from "./articleList.module.css";

const ArticleList = ({ articles }) => (
  <ul className={s.list}>
    {articles.map(article => (
      <Link key={article.id} className={s.link} to={`/article/${article.id}`}>
        <li className={s.item}>
          <Article id={article.id} content={article.content} />
        </li>
      </Link>
    ))}
  </ul>
);

export default ArticleList;
