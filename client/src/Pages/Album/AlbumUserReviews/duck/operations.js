import axios from "axios";

import {
  getUserRatingsFetch,
  getUserRatingsSuccess,
  getUserRatingsError,
  getUserCommentsFetch,
  getUserCommentsSuccess,
  getUserCommentsError,
  addUserRatingFetch,
  addUserRatingSuccess,
  addUserRatingError,
  putUserRatingFetch,
  putUserRatingSuccess,
  putUserRatingError,
  addUserCommentFetch,
  addUserCommentSuccess,
  addUserCommentError,
  updateGeneralUserRatingFetch,
  updateGeneralUserRatingSuccess,
  updateGeneralUserRatingError
} from "./actions";

import selectors from "./selectors";

const getUserRatings = () => async dispatch => {
  dispatch(getUserRatingsFetch());
  try {
    const response = await axios.get("/user/userRatings");
    dispatch(getUserRatingsSuccess(response.data.userRatings));
  } catch (error) {
    dispatch(getUserRatingsError(error));
  }
};

const getUserComments = () => async dispatch => {
  dispatch(getUserCommentsFetch());
  try {
    const response = await axios.get("/user/userComments");
    dispatch(getUserCommentsSuccess(response.data.userComments));
  } catch (error) {
    dispatch(getUserCommentsError(error));
  }
};

const addUserRating = userRating => async dispatch => {
  dispatch(addUserRatingFetch());
  try {
    const response = await axios.post("/user/userRatings", userRating);
    dispatch(addUserRatingSuccess(response.data.userRating));
  } catch (error) {
    dispatch(addUserRatingError(error));
  }
};

const putUserRating = userRating => async dispatch => {
  dispatch(putUserRatingFetch());
  try {
    const response = await axios.put(
      `/user/userRatings/${userRating.id}`,
      userRating
    );
    dispatch(putUserRatingSuccess(response.data.userRating));
  } catch (error) {
    dispatch(putUserRatingError(error));
  }
};

const addUserComment = userComment => async dispatch => {
  dispatch(addUserCommentFetch());
  try {
    const response = await axios.post("/user/userComments", userComment);
    dispatch(addUserCommentSuccess(response.data.userComment));
  } catch (error) {
    dispatch(addUserCommentError(error));
  }
};

const getRating = (albumUserRating, rating) => {
  const ratingSum = albumUserRating.rating * albumUserRating.count;
  return (ratingSum + rating) / albumUserRating.count + 1;
};

const updateGeneralUserRating = (id, rating) => async (dispatch, getState) => {
  dispatch(updateGeneralUserRatingFetch());
  try {
    const albumUserRating = selectors.getAlbumUserRating(getState(), id);
    const patch = {
      userRating: {
        rating: getRating(albumUserRating, rating),
        count: albumUserRating.count + 1
      }
    };
    const response = await axios.put(
      `http://localhost:3004/albums/${id}`,
      patch
    );
    dispatch(updateGeneralUserRatingSuccess(response.data));
  } catch (error) {
    dispatch(updateGeneralUserRatingError());
  }
};

export default {
  getUserRatings,
  getUserComments,
  addUserRating,
  putUserRating,
  addUserComment,
  updateGeneralUserRating
};
