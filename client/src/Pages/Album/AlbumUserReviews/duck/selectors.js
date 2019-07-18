import { createSelector } from "reselect";
import * as R from "ramda";

const getAllUserRatings = state => state.userRatings;
const getAllUserComments = state => state.userComments;
const getAlbumUserRating = (state, id) => state.albums[id].userRating;

const getUserId = state => state.session.user && state.session.user.id;

const findUserRatingByUserAndAlbumId = createSelector(
  [getAllUserRatings, getUserId, (state, albumId) => albumId],
  (ratings, userId, albumId) => {
    if (ratings && userId) {
      return R.find(
        userRate => userRate.userId === userId && userRate.albumId === albumId
      )(ratings);
    }
  }
);

const getUserCommentsByAlbumId = createSelector(
  [getAllUserComments, (state, albumId) => albumId],
  (comments, albumId) =>
    comments
      ? R.pipe(
          R.filter(comment => comment.albumId === albumId),
          R.sort((a, b) => b.date - a.date)
        )(comments)
      : []
);

export default {
  findUserRatingByUserAndAlbumId,
  getUserId,
  getUserCommentsByAlbumId,
  getAlbumUserRating
};
