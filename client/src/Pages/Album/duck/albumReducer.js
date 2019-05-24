import { GET_ALBUMS } from "./actionTypes";
import { UPDATE_GENERAL_USER_RATING_SUCCESS } from "../AlbumUserReviews/duck/actionTypes";

const initialState = {};

const albumsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALBUMS:
      return payload.albums;
    case UPDATE_GENERAL_USER_RATING_SUCCESS: {
      const updatedAlbum = payload.updatedAlbum;
      return { ...state, [updatedAlbum.id]: updatedAlbum };
    }
    default:
      return state;
  }
};

export default albumsReducer;
