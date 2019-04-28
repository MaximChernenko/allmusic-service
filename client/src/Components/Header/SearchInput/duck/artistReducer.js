import { GET_ARTIST } from "./actionTypes";

const initialValue = {};

const valueReducer = (state = initialValue, { type, payload }) => {
  switch (type) {
    case GET_ARTIST:
      return payload.artist;
    default:
      return state;
  }
};

export default valueReducer;
