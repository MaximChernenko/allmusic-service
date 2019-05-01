import {
  SET_ALL_FILTER,
  SET_ARTIST_FILTER,
  SET_ALBUM_FILTER,
  SET_SONG_FILTER
} from "./actionTypes";

const initialValue = "ALL";

const searchBoxFilterReducer = (state = initialValue, { type }) => {
  switch (type) {
    case SET_ALL_FILTER:
      return initialValue;
    case SET_ARTIST_FILTER:
      return "ARTIST";
    case SET_ALBUM_FILTER:
      return "ALBUM";
    case SET_SONG_FILTER:
      return "SONG";
    default:
      return state;
  }
};

export default searchBoxFilterReducer;
