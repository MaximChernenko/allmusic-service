import React from "react";
import { connect } from "react-redux";
// redux
import reviewSelectors from "../duck/selectors";
// Components
import ReviewItem from "./ReviewItem/ReviewItem";
// styles
import s from "./reviewList.module.css";

const ReviewList = ({ comments }) => (
  <div className={s.wrapper}>
    <h2 className={s.title}>User Reviews</h2>
    <ul className={s.list}>
      {comments.map(comment => (
        <li key={comment.id}>
          <ReviewItem comment={comment} />
        </li>
      ))}
    </ul>
  </div>
);

const mapStateToProps = (state, { album }) => ({
  comments: reviewSelectors.getUserCommentsByAlbumId(state, album.id)
});

export default connect(mapStateToProps)(ReviewList);
