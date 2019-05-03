import { combineReducers } from "redux";

// reducers
import userReducer from "./userReducer";
import authenticatedReducer from "./authenticatedReducer";
import tokenReducer from "./tokenReducer";

export default combineReducers({
  user: userReducer,
  isAuthenticated: authenticatedReducer,
  token: tokenReducer
});
