import { combineReducers } from "redux";

// reducers
import valueReducer from "../../../Components/Header/SearchInput/duck/valueReducer";
import searchFilterReducer from "../SearchBox/duck/searchBoxFilterReducer";
import advancedSearchReducer from "../../AdvancedSearch/duck/advancedSearchReducer";

export default combineReducers({
  value: valueReducer,
  searchFilter: searchFilterReducer,
  advancedSearch: advancedSearchReducer
});
