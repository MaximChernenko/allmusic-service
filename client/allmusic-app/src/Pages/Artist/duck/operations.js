import { getArtistsFetch, getArtistsSuccess, getArtistsError } from "./actions";
import axios from "axios";

export const getArtists = () => async dispatch => {
  // start request
  dispatch(getArtistsFetch());
  try {
    const { data } = await axios.get("http://localhost:3004/artists");
    // if success
    dispatch(getArtistsSuccess(data));
  } catch (error) {
    // if error
    dispatch(getArtistsError(error));
  }
};
