import { takeLatest, call, put, select } from "redux-saga/effects";

import {
  GET_ALL_USER_SETTINGS_FETCH,
  UPDATE_USER_SETTINGS_FETCH
} from "./actionTypes";

import {
  getAllUserSettSuccess,
  getAllUserSettError,
  updateUserSettSuccess,
  updateUserSettError
} from "./actions";

import userSettSelectors from "./selectors";

import * as api from "./api";

function* getAllUserSettings() {
  try {
    const { data } = yield call(api.getAllUserSettings);
    yield put(getAllUserSettSuccess(data.userSettings));
  } catch (error) {
    yield put(getAllUserSettError(error));
  }
}

function* updateUserSettings({ payload: userSettings }) {
  const { _id } = yield select(userSettSelectors.getUserSettByUserId);
  try {
    const { data } = yield call(api.updateUserSettings, _id, userSettings);
    yield put(updateUserSettSuccess(data.userSettings));
  } catch (error) {
    yield put(updateUserSettError(error));
  }
}

export default function* userProfileSaga() {
  yield takeLatest(GET_ALL_USER_SETTINGS_FETCH, getAllUserSettings);
  yield takeLatest(UPDATE_USER_SETTINGS_FETCH, updateUserSettings);
}
