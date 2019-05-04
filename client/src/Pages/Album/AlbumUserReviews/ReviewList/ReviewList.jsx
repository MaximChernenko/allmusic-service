import React from "react";

// Components
import ReviewItem from "./ReviewItem/ReviewItem";
// styles
import s from "./reviewList.module.css";

const ReviewList = ({ album }) => (
  <div className={s.wrapper}>
    <h2 className={s.title}>User Reviews</h2>
    <ul className={s.list}>
      <li>
        <ReviewItem />
      </li>
    </ul>
  </div>
);

export default ReviewList;
