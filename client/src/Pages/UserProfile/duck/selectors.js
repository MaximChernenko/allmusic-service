import { createSelector } from "reselect";

const getAllUserSett = state => state.userSettings;

const getUserId = state => state.session.user.id;

const getUserSettByUserId = createSelector(
  [getAllUserSett, getUserId],
  (allUserSett, userId) =>
    allUserSett.find(userSett => userSett.userId === userId)
);

export default { getUserSettByUserId };
