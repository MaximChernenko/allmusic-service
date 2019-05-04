import React from "react";
import { connect } from "react-redux";
// redux
import sessionSelectors from "../../../store/session/selectors";
// Components
import ReviewForm from "./ReviewForm/ReviewForm";
import ReviewList from "./ReviewList/ReviewList";

const AlbumUserReviews = ({ album, isAuthenticated }) => (
  <div>
    {isAuthenticated && <ReviewForm album={album} />}
    <ReviewList album={album} />
  </div>
);

const mapStateToProps = state => ({
  isAuthenticated: sessionSelectors.isAuthenticated(state)
});

export default connect(mapStateToProps)(AlbumUserReviews);
