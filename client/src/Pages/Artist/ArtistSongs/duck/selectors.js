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

const getSongsByArtist = createSelector(
  [getSongs, (state, id) => id],
  (songs, id) => {
    const keys = Object.keys(songs);
    const songsArr = keys.map(id => songs[id]);
    return songsArr.filter(song => song.band === id);
  }
);

export default { getSongsById, getArtistBySong, getSongsByArtist };
