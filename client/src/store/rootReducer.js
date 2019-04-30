import { combineReducers } from "redux";

// reducers
import artistsReducer from "../Pages/Artist/duck/artistReducer";
import albumsReducer from "../Pages/Album/duck/albumReducer";
import songsReducer from "../Pages/Artist/ArtistSongs/duck/songReducer";
import articlesReducer from "../Pages/Article/duck/articlesReducer";
import searchReducer from "../Components/Header/SearchInput/duck/searchReducer";

const rootReducer = combineReducers({
  artists: artistsReducer,
  albums: albumsReducer,
  songs: songsReducer,
  articles: articlesReducer,
  search: searchReducer
});

export default rootReducer;
