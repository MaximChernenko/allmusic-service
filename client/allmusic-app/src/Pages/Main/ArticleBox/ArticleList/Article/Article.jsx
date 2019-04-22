import React from "react";

// styles
import s from "./article.module.css";

const Article = ({ src, content }) => (
  <div className={s.wrapper}>
    <img className={s.img} alt={content.slice(0, 10)} src={src} />
    <p className={s.text}>{content.slice(0, 40).trim() + "..."}</p>
  </div>
);

export default Article;
