import { combineReducers } from "redux";

// reducers
import artistsReducer from "../Pages/Artist/duck/artistReducer";
import albumsReducer from "../Pages/Album/duck/albumReducer";
import songsReducer from "../Pages/Song/duck/songReducer";
import articlesReducer from "../Pages/Article/duck/articlesReducer";

const rootReducer = combineReducers({
  artists: artistsReducer,
  albums: albumsReducer,
  songs: songsReducer,
  articles: articlesReducer
});

export default rootReducer;
