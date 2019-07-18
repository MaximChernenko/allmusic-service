import { createSelector } from "reselect";
import * as R from "ramda";

const getAllUserSett = state => state.userSettings;

const getUserId = state => state.session.user && state.session.user.id;

const getUserSettByUserId = createSelector(
  [getAllUserSett, getUserId],
  (allUserSett, userId) => R.find(R.propEq("userId", userId))(allUserSett)
);

export default { getUserSettByUserId };
