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
    const resp = await axios.get("http://localhost:3004/userSettings");
    dispatch(getAllUserSettSuccess(resp.data));
  } catch (error) {
    dispatch(getAllUserSettError(error));
  }
};

const updateUserSett = userSett => async (dispatch, getState) => {
  dispatch(updateUserSettFetch());
  try {
    const resp = await axios.put(
      `http://localhost:3004/userSettings/${+userSettSelectors.getUserSettByUserId(
        getState()
      ).id}`,
      userSett
    );
    console.log(resp.data);
    dispatch(updateUserSettSuccess(resp.data));
  } catch (error) {
    dispatch(updateUserSettError(error));
  }
};

export default { getAllUserSett, updateUserSett };
