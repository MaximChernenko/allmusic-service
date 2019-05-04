import { createSelector } from "reselect";

const getAllUserRatings = state => state.userRatings;

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

export default { findUserRatingByUserAndAlbumId, getUserId };
