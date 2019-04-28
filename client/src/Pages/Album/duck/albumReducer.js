import { GET_ALBUMS } from "./actionTypes";

const initialState = {};

const albumsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALBUMS:
      return payload.albums;
    default:
      return state;
  }
};

export default albumsReducer;
