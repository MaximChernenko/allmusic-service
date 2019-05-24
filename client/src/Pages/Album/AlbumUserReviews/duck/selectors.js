import { createSelector } from "reselect";

const getAllUserRatings = state => state.userRatings;
const getAllUserComments = state => state.userComments;
const getAlbumUserRating = (state, id) => state.albums[id].userRating;

const getUserId = state => state.session.user && state.session.user.id;

const findUserRatingByUserAndAlbumId = createSelector(
  [getAllUserRatings, getUserId, (state, albumId) => albumId],
  (ratings, userId, albumId) => {
    if (ratings && userId) {
      return ratings.find(
        userRate => userRate.userId === userId && userRate.albumId === albumId
      );
    }
  }
);

const getUserCommentsByAlbumId = createSelector(
  [getAllUserComments, (state, albumId) => albumId],
  (comments, albumId) =>
    comments
      ? comments
          .filter(comment => comment.albumId === albumId)
          .sort((a, b) => b.date - a.date)
      : []
);

export default {
  findUserRatingByUserAndAlbumId,
  getUserId,
  getUserCommentsByAlbumId,
  getAlbumUserRating
};
