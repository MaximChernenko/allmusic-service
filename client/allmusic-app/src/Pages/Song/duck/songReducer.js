import { GET_SONGS } from "./actionTypes";

const initialState = {};

const songsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_SONGS:
      return payload.songs;
    default:
      return state;
  }
};

export default songsReducer;
