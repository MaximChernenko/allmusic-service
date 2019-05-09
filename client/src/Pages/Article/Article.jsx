import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import Loader from "react-loader-spinner";

// utils
import withScrollToTop from "../../utils/hocs/withScrollToTop";
import getClearId from "../../utils/helpers/getClearId";
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
    <div className={s.loader}>
      <Loader type="Watch" color="#00BFFF" height="100" width="100" />
    </div>
  );

const mapStateToProps = (
  state,
  {
    match: {
      params: { id }
    }
  }
) => ({
  article: articleSelectors.getArticleById(state, getClearId(id))
});

export default compose(
  connect(mapStateToProps),
  withScrollToTop
)(ArticlePage);
