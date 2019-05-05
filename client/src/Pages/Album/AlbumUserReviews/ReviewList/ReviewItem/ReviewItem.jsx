import React from "react";

// Components
import UserRating from "../../../../Artist/ArtistDisco/Rating/UserRating/UserRating";

// styles
import s from "./reviewItem.module.css";

const getValidDate = unixDate => {
  const date = new Date(unixDate);
  console.log(unixDate);
  return date.getDate() + "." + date.getMonth() + " " + date.getFullYear();
};

const ReviewItem = ({ comment }) => (
  <div className={s.wrapper}>
    <div className={s.box}>
      <p className={s.name}>{comment.userName}</p>
      <p className={s.date}>{getValidDate(comment.date)}</p>
      <UserRating rating={comment.userRating} />
    </div>
    <p className={s.review}>{comment.comment}</p>
  </div>
);

export default ReviewItem;
