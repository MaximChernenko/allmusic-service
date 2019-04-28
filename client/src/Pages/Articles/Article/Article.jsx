import React from "react";

// styles
import s from "./article.module.css";

const Article = ({ content, id }) => (
  <div className={s.wrapper}>
    <img
      className={s.img}
      src={process.env.PUBLIC_URL + `/images/articles/${id}.jpg`}
      alt={content.slice(0, 10)}
    />
    <p className={s.text}>{content}</p>
  </div>
);

export default Article;
