import axios from "axios";
import {
  signUpRequest,
  signUpSuccess,
  signUpError,
  signInRequest,
  signInSuccess,
  signInError,
  signOutRequest,
  signOutSuccess,
  refreshUserStart,
  refreshUserSuccess
} from "./actions";
// userSett actions
import {
  createDefaultUserSettFetch,
  createDefaultUserSettSuccess,
  createDefaultUserSettError
} from "../../Pages/UserProfile/duck/actions";

import selectors from "./selectors";
import {
  setAuthHeader,
  clearAuthHeader
} from "../../utils/services/axiosDefaults";

const userSettDefaults = userId => ({
  userId,
  name: "Name",
  surname: "Surname",
  bio: "bio",
  age: 18
});

const signUp = credentials => dispatch => {
  dispatch(signUpRequest());
  axios
    .post("/auth/signup", credentials)
    .then(({ data }) => {
      setAuthHeader(data.token);
      dispatch(signUpSuccess(data));
      dispatch(createDefaultUserSettFetch());
      axios
        .post("/user/userSettings", userSettDefaults(data.user.id))
        .then(({ data: { userSettings } }) => {
          dispatch(createDefaultUserSettSuccess(userSettings));
        })
        .catch(error => dispatch(createDefaultUserSettError(error)));
    })
    .catch(error => dispatch(signUpError(error)));
};

const signIn = credentials => dispatch => {
  dispatch(signInRequest());

  axios
    .post("/auth/signin", credentials)
    .then(({ data }) => {
      setAuthHeader(data.token);
      dispatch(signInSuccess(data));
    })
    .catch(error => dispatch(signInError(error)));
};

const signOut = () => dispatch => {
  dispatch(signOutRequest());

  axios.post("/auth/signout").then(() => {
    clearAuthHeader();
    dispatch(signOutSuccess());
  });
};

const refreshCurrentUser = () => (dispatch, getState) => {
  const token = selectors.getToken(getState());

  if (!token) return;

  setAuthHeader(token);

  dispatch(refreshUserStart());

  axios
    .get("/auth/current")
    .then(({ data }) => dispatch(refreshUserSuccess(data.user)))
    .catch(error => {
      clearAuthHeader();
      console.log("Error while refreshing: ", error);
    });
};

export default { signUp, signIn, signOut, refreshCurrentUser };
