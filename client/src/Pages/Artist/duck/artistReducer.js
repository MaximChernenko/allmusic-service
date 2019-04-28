import { GET_ARTISTS } from "./actionTypes";

const initialState = {};

const artistsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ARTISTS:
      return payload.artists;
    default:
      return state;
  }
};

export default artistsReducer;
