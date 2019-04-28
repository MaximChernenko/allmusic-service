import { getArtist } from "./actions";
import artistSelectors from "../../../../Pages/Artist/duck/selectors";

export const getArtistById = id => (dispatch, getState) => {
  const artist = artistSelectors.getArtist(getState(), id);
  artist && dispatch(getArtist(artist));
};
