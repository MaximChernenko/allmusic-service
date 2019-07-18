import { createSelector } from "reselect";
import * as R from "ramda";

const getSongs = state => state.songs;
const getArtists = state => state.artists;

const getSongsById = createSelector(
  [getSongs, (state, ids) => ids],
  (songs, ids) => R.map(id => songs[id])(ids)
);

const getArtistBySong = createSelector(
  [getSongsById, getArtists],
  (songs, artists) => (songs[0] ? artists[songs[0].band] : null)
);

const getSongsByArtist = createSelector(
  [getSongs, (state, id) => id],
  (songs, id) =>
    R.pipe(
      Object.keys,
      R.map(id => songs[id]),
      R.filter(song => song.band === id)
    )(songs)
);

export default { getSongsById, getArtistBySong, getSongsByArtist };
