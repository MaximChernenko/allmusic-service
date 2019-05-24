import {
  GET_USER_RATINGS_FETCH,
  GET_USER_RATINGS_SUCCESS,
  GET_USER_RATINGS_ERROR,
  GET_USER_COMMENTS_FETCH,
  GET_USER_COMMENTS_SUCCESS,
  GET_USER_COMMENTS_ERROR,
  PUT_USER_RATING_FETCH,
  PUT_USER_RATING_SUCCESS,
  PUT_USER_RATING_ERROR,
  ADD_USER_RATING_FETCH,
  ADD_USER_RATING_SUCCESS,
  ADD_USER_RATING_ERROR,
  ADD_USER_COMMENT_FETCH,
  ADD_USER_COMMENT_SUCCESS,
  ADD_USER_COMMENT_ERROR,
  UPDATE_GENERAL_USER_RATING_FETCH,
  UPDATE_GENERAL_USER_RATING_SUCCESS,
  UPDATE_GENERAL_USER_RATING_ERROR
} from "./actionTypes";

export const getUserRatingsFetch = () => ({
  type: GET_USER_RATINGS_FETCH
});

export const getUserRatingsSuccess = data => ({
  type: GET_USER_RATINGS_SUCCESS,
  payload: { data }
});

export const getUserRatingsError = error => ({
  type: GET_USER_RATINGS_ERROR,
  payload: { error }
});

export const getUserCommentsFetch = () => ({
  type: GET_USER_COMMENTS_FETCH
});

export const getUserCommentsSuccess = data => ({
  type: GET_USER_COMMENTS_SUCCESS,
  payload: { data }
});

export const getUserCommentsError = error => ({
  type: GET_USER_COMMENTS_ERROR,
  payload: { error }
});

export const putUserRatingFetch = () => ({
  type: PUT_USER_RATING_FETCH
});

export const putUserRatingSuccess = userRating => ({
  type: PUT_USER_RATING_SUCCESS,
  payload: { userRating }
});

export const putUserRatingError = error => ({
  type: PUT_USER_RATING_ERROR,
  payload: { error }
});

export const addUserRatingFetch = () => ({
  type: ADD_USER_RATING_FETCH
});

export const addUserRatingSuccess = userRating => ({
  type: ADD_USER_RATING_SUCCESS,
  payload: { userRating }
});

export const addUserRatingError = error => ({
  type: ADD_USER_RATING_ERROR,
  payload: { error }
});

export const addUserCommentFetch = () => ({
  type: ADD_USER_COMMENT_FETCH
});

export const addUserCommentSuccess = userComment => ({
  type: ADD_USER_COMMENT_SUCCESS,
  payload: { userComment }
});

export const addUserCommentError = error => ({
  type: ADD_USER_COMMENT_ERROR,
  payload: { error }
});

export const updateGeneralUserRatingFetch = () => ({
  type: UPDATE_GENERAL_USER_RATING_FETCH
});

export const updateGeneralUserRatingSuccess = updatedAlbum => ({
  type: UPDATE_GENERAL_USER_RATING_SUCCESS,
  payload: { updatedAlbum }
});

export const updateGeneralUserRatingError = error => ({
  type: UPDATE_GENERAL_USER_RATING_ERROR,
  payload: { error }
});
