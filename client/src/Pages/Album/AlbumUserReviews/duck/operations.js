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
  putUserRatingError
} from "./actions";

const getUserRatings = () => async dispatch => {
  dispatch(getUserRatingsFetch());
  try {
    const response = await axios.get("http://localhost:3004/userRatings");
    dispatch(getUserRatingsSuccess(response.data));
  } catch (error) {
    dispatch(getUserRatingsError(error));
  }
};

const getUserComments = () => async dispatch => {
  dispatch(getUserCommentsFetch());
  try {
    const response = await axios.get("http://localhost:3004/userComments");
    dispatch(getUserCommentsSuccess(response.data));
  } catch (error) {
    dispatch(getUserCommentsError(error));
  }
};

const addUserRating = userRating => async dispatch => {
  dispatch(addUserRatingFetch());
  try {
    const response = await axios.post(
      "http://localhost:3004/userRatings",
      userRating
    );
    dispatch(addUserRatingSuccess(response.data));
  } catch (error) {
    dispatch(addUserRatingError(error));
  }
};

const putUserRating = userRating => async dispatch => {
  dispatch(putUserRatingFetch());
  try {
    const response = await axios.put(
      `http://localhost:3004/userRatings/${userRating.id}`,
      userRating
    );
    dispatch(putUserRatingSuccess(response.data));
  } catch (error) {
    dispatch(putUserRatingError(error));
  }
};

export default {
  getUserRatings,
  getUserComments,
  addUserRating,
  putUserRating
};
