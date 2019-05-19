import axios from "axios";

// actions
import {
  getAllUserSettFetch,
  getAllUserSettSuccess,
  getAllUserSettError,
  updateUserSettFetch,
  updateUserSettSuccess,
  updateUserSettError
} from "./actions";

// selectors
import userSettSelectors from "./selectors";

const getAllUserSett = () => async dispatch => {
  dispatch(getAllUserSettFetch());
  try {
    const resp = await axios.get("/user/userSettings");
    dispatch(getAllUserSettSuccess(resp.data.userSettings));
  } catch (error) {
    dispatch(getAllUserSettError(error));
  }
};

const updateUserSett = userSett => async (dispatch, getState) => {
  dispatch(updateUserSettFetch());
  try {
    const resp = await axios.put(
      `/user/userSettings/${
        userSettSelectors.getUserSettByUserId(getState())._id
      }`,
      userSett
    );
    dispatch(updateUserSettSuccess(resp.data.userSettings));
  } catch (error) {
    dispatch(updateUserSettError(error));
  }
};

export default { getAllUserSett, updateUserSett };
