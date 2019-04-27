import { combineReducers } from "redux";

// reducers
import artistsReducer from "../Pages/Artist/duck/artistReducer";
import albumsReducer from "../Pages/Album/duck/albumReducer";
import songsReducer from "../Pages/Song/duck/songReducer";

const rootReducer = combineReducers({
  artists: artistsReducer,
  albums: albumsReducer,
  songs: songsReducer
});

export default rootReducer;
