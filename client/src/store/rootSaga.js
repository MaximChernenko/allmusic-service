import { all } from "redux-saga/effects";

// sagas
import sessionSaga from "./session/sessionSaga";

function* rootSaga() {
  yield all([sessionSaga()]);
}

export default rootSaga;
