import React from "react";

// Components
import UserRatingSelect from "../../AlbumRateList/UserRatingSelect/UserRatingSelect";
// styles
import s from "./reviewForm.module.css";

const ReviewForm = ({ album }) => (
  <div className={s.wrapper}>
    <div className={s.box}>
      <h2 className={s.title}>Your Review</h2>
      <div className={s.innerBox}>
        <p className={s.text}>Your Rating</p>
        <UserRatingSelect albumId={album.id} />
      </div>
    </div>
    <form className={s.form}>
      <textarea
        className={s.textarea}
        placeholder={`Your Review of ${album.name} (50-3.000 characters)`}
      />
      <button className={s.btn} type="submit">
        Submit Review
      </button>
    </form>
  </div>
);

export default ReviewForm;
