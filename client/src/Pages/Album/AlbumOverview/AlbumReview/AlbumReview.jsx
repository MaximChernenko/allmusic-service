import React from "react";

// styles
import s from "./albumReview.module.css";

const AlbumReview = ({ review }) => (
  <div>
    <div className={s.inner}>
      <h2 className={s.title}>Album Review</h2>
      <p className={s.text}>{review}</p>
    </div>
  </div>
);

export default AlbumReview;
