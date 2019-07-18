import { all } from "redux-saga/effects";

// sagas
import sessionSaga from "./session/sessionSaga";
import userProfileSaga from "../Pages/UserProfile/duck/userProfileSaga";

function* rootSaga() {
  yield all([sessionSaga(), userProfileSaga()]);
}

export default rootSaga;
