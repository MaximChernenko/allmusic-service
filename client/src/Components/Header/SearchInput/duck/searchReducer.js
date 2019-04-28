import { combineReducers } from "redux";

// reducers
import valueReducer from "./valueReducer";
import artistReducer from "./artistReducer";

export default combineReducers({
  value: valueReducer,
  artist: artistReducer
});
