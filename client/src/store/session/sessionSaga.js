import { takeLatest, select, call, put, fork } from "redux-saga/effects";

import selectors from "./selectors";
import {
  REFRESH_CURRENT_USER_START,
  SIGN_OUT_REQUEST,
  SIGN_IN_REQUEST,
  SIGN_UP_REQUEST
} from "./actionTypes";

import {
  signUpSuccess,
  signUpError,
  signInSuccess,
  signInError,
  signOutSuccess,
  refreshUserSuccess
} from "./actions";

import {
  createDefaultUserSettFetch,
  createDefaultUserSettSuccess,
  createDefaultUserSettError
} from "../../Pages/UserProfile/duck/actions";

import {
  setAuthHeader,
  clearAuthHeader
} from "../../utils/services/axiosDefaults";

import * as api from "./api";

const userSettDefaults = userId => ({
  userId,
  name: "Name",
  surname: "Surname",
  bio: "bio",
  age: 18
});

function* createDefaultUserSett(id) {
  yield put(createDefaultUserSettFetch());
  try {
    const {
      data: { userSettings }
    } = yield call(api.createDefaultUserSettings, userSettDefaults(id));
    yield put(createDefaultUserSettSuccess(userSettings));
  } catch (error) {
    yield put(createDefaultUserSettError(error));
  }
}

function* signUp({ payload: credentials }) {
  try {
    const { data } = yield call(api.signUp, credentials);
    setAuthHeader(data.token);
    yield put(signUpSuccess(data));
    yield fork(createDefaultUserSett, data.user.id);
  } catch (error) {
    yield put(signUpError(error));
  }
}

function* signIn({ payload: credentials }) {
  try {
    const { data } = yield call(api.signIn, credentials);
    setAuthHeader(data.token);
    yield put(signInSuccess(data));
  } catch (error) {
    yield put(signInError(error));
  }
}

function* signOut() {
  try {
    yield call(api.signOut);
    clearAuthHeader();
    yield put(signOutSuccess());
  } catch (error) {
    console.log("sign out faile: " + error);
  }
}

function* refreshCurrentUser() {
  const token = yield select(selectors.getToken);

  if (!token) return;

  setAuthHeader(token);

  try {
    const { data } = yield call(api.refreshCurrentUser);
    yield put(refreshUserSuccess(data.user));
  } catch (error) {
    clearAuthHeader();
    console.log("Error while refreshing: ", error);
  }
}

export default function* sessionSaga() {
  yield takeLatest(REFRESH_CURRENT_USER_START, refreshCurrentUser);
  yield takeLatest(SIGN_OUT_REQUEST, signOut);
  yield takeLatest(SIGN_IN_REQUEST, signIn);
  yield takeLatest(SIGN_UP_REQUEST, signUp);
}
