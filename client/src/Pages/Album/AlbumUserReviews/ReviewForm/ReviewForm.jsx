import React, { Component } from "react";
import { connect } from "react-redux";
// redux
import sessionSelectors from "../../../../store/session/selectors";
import reviewSelectors from "../duck/selectors";
import userOperations from "../duck/operations";
// Components
import UserRatingSelect from "../../AlbumRateList/UserRatingSelect/UserRatingSelect";
// styles
import s from "./reviewForm.module.css";

const initialState = { review: "" };

class ReviewForm extends Component {
  state = {
    ...initialState
  };

  handlerTextAreaChange = ({ target: { value } }) => {
    this.setState({
      review: value
    });
  };

  handleSubmitReview = e => {
    e.preventDefault();
    const {
      addUserComment,
      user: { id, name },
      album,
      userRating
    } = this.props;
    const { review } = this.state;
    addUserComment({
      comment: review,
      userId: id,
      userName: name,
      userRating: userRating ? userRating.rating : null,
      albumId: album.id,
      date: Date.now()
    });
    this.resetForm();
  };

  resetForm = () => {
    this.setState({ ...initialState });
  };

  render() {
    const { review } = this.state;
    const { album } = this.props;
    return (
      <div className={s.wrapper}>
        <div className={s.box}>
          <h2 className={s.title}>Your Review</h2>
          <div className={s.innerBox}>
            <p className={s.text}>Your Rating</p>
            <UserRatingSelect albumId={album.id} />
          </div>
        </div>
        <form onSubmit={this.handleSubmitReview} className={s.form}>
          <textarea
            value={review}
            onChange={this.handlerTextAreaChange}
            className={s.textarea}
            placeholder={`Your Review of ${album.name} (50-3.000 characters)`}
          />
          <button className={s.btn} type="submit">
            Submit Review
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state, { album }) => ({
  user: sessionSelectors.getUser(state),
  userRating: reviewSelectors.findUserRatingByUserAndAlbumId(state, album.id)
});

const mapDispatchToProps = {
  addUserComment: userOperations.addUserComment
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewForm);
