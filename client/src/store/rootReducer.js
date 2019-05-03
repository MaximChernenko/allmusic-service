import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// reducers
import artistsReducer from "../Pages/Artist/duck/artistReducer";
import albumsReducer from "../Pages/Album/duck/albumReducer";
import songsReducer from "../Pages/Artist/ArtistSongs/duck/songReducer";
import articlesReducer from "../Pages/Article/duck/articlesReducer";
import searchReducer from "../Pages/Search/duck/searchReducer";
import sessionReducer from "./session/sessionReducer";

const tokenPersistConfig = {
  key: "token",
  storage,
  whitelist: ["token"]
};

const rootReducer = combineReducers({
  artists: artistsReducer,
  albums: albumsReducer,
  songs: songsReducer,
  articles: articlesReducer,
  search: searchReducer,
  session: persistReducer(tokenPersistConfig, sessionReducer)
});

export default rootReducer;
