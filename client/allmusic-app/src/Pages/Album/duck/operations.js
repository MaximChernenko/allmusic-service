import { getAlbumsError, getAlbumsFetch, getAlbumsSuccess } from "./actions";
import axios from "axios";

export const getAlbums = () => async dispatch => {
  // start request
  dispatch(getAlbumsFetch());
  try {
    const { data } = await axios.get("http://localhost:3004/albums");
    // if success
    dispatch(getAlbumsSuccess(data));
  } catch (error) {
    // if error
    dispatch(getAlbumsError(error));
  }
};
