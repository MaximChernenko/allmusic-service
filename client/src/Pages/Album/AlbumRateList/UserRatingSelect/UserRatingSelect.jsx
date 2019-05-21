import React, { Component } from "react";
import { connect } from "react-redux";
// redux
import userSelectors from "../../AlbumUserReviews/duck/selectors";
import userOperations from "../../AlbumUserReviews/duck/operations";
// styles
import s from "./userRatingSelect.module.css";

class UserRatingSelect extends Component {
  handleStarClick = ({ target: { value } }) => {
    const { userRating, addRating, putRating, userId, albumId } = this.props;
    if (userRating) {
      putRating({ id: userRating._id, rating: Number(value), userId, albumId });
    } else {
      addRating({ rating: Number(value), userId, albumId });
    }
  };

  render() {
    const { userRating } = this.props;
    return (
      <ul className={s.list}>
        <li>
          <button
            value="1"
            onClick={this.handleStarClick}
            className={`${s.defaultBtn} ${userRating &&
              userRating.rating >= 1 &&
              s.activeBtn}`}
          />
        </li>
        <li>
          <button
            value="2"
            onClick={this.handleStarClick}
            className={`${s.defaultBtn} ${userRating &&
              userRating.rating >= 2 &&
              s.activeBtn}`}
          />
        </li>
        <li>
          <button
            value="3"
            onClick={this.handleStarClick}
            className={`${s.defaultBtn} ${userRating &&
              userRating.rating >= 3 &&
              s.activeBtn}`}
          />
        </li>
        <li>
          <button
            value="4"
            onClick={this.handleStarClick}
            className={`${s.defaultBtn} ${userRating &&
              userRating.rating >= 4 &&
              s.activeBtn}`}
          />
        </li>
        <li>
          <button
            value="5"
            onClick={this.handleStarClick}
            className={`${s.defaultBtn} ${userRating &&
              userRating.rating >= 5 &&
              s.activeBtn}`}
          />
        </li>
      </ul>
    );
  }
}

const mapStateToProps = (state, { albumId }) => ({
  userRating: userSelectors.findUserRatingByUserAndAlbumId(state, albumId),
  userId: userSelectors.getUserId(state)
});

const mapDispatchToProps = {
  addRating: userOperations.addUserRating,
  putRating: userOperations.putUserRating
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserRatingSelect);
