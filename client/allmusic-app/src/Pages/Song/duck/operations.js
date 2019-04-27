import { getSongsError, getSongsFetch, getSongsSuccess } from "./actions";
import axios from "axios";

export const getSongs = () => async dispatch => {
  // start request
  dispatch(getSongsFetch());
  try {
    const { data } = await axios.get("http://localhost:3004/songs");
    // if success
    dispatch(getSongsSuccess(data));
  } catch (error) {
    // if error
    dispatch(getSongsError(error));
  }
};
