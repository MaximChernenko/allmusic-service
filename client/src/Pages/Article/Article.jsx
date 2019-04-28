import React from "react";
import { connect } from "react-redux";

// redux
import articleSelectors from "../Article/duck/selectors";

// styles
import s from "./article.module.css";

const ArticlePage = ({ article }) =>
  article ? (
    <article className={s.article}>
      <img
        className={s.img}
        alt={article.content.slice(0, 10)}
        src={process.env.PUBLIC_URL + `/images/articles/${article.id}.jpg`}
      />
      <p className={s.text}>{article.content}</p>
    </article>
  ) : (
    <h2>Article not found</h2>
  );

const mapStateToProps = (
  state,
  {
    match: {
      params: { id }
    }
  }
) => ({
  article: articleSelectors.getArticleById(state, id)
});

export default connect(mapStateToProps)(ArticlePage);
