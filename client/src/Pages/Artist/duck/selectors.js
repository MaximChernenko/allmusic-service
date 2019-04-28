import { createSelector } from "reselect";

const getArtists = state => state.artists;

const getArtist = createSelector(
  [getArtists, (state, id) => id],
  (artists, id) => artists[id]
);

export default { getArtists, getArtist };
