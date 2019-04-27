import { createSelector } from "reselect";

const getSongs = state => state.songs;
const getArtists = state => state.artists;

const getSongsById = createSelector(
  [getSongs, (state, ids) => ids],
  (songs, ids) => ids.map(id => songs[id])
);

const getArtistBySong = createSelector(
  [getSongsById, getArtists],
  (songs, artists) => (songs[0] ? artists[songs[0].band] : null)
);

export default { getSongsById, getArtistBySong };
