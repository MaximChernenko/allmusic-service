import { createSelector } from "reselect";

const getSearch = state => state.search;

const getArtists = state => state.artists;

const getAlbums = state => state.albums;

const getSongs = state => state.songs;

const getArtistsBySearch = createSelector(
  [getSearch, getArtists],
  (filter, artists) => {
    const keys = Object.keys(artists);
    const artistsArr = keys.map(id => artists[id]);
    return artistsArr.filter(artist =>
      artist.name.toLowerCase().includes(filter)
    );
  }
);

const getAlbumsBySearch = createSelector(
  [getSearch, getAlbums],
  (filter, albums) => {
    const keys = Object.keys(albums);
    const albumsArr = keys.map(id => albums[id]);
    return albumsArr.filter(albums =>
      albums.name.toLowerCase().includes(filter)
    );
  }
);

const getSongsBySearch = createSelector(
  [getSearch, getSongs],
  (filter, songs) => {
    const keys = Object.keys(songs);
    const songsArr = keys.map(id => songs[id]);
    return songsArr.filter(songs => songs.name.toLowerCase().includes(filter));
  }
);

export default {
  getSearch,
  getArtistsBySearch,
  getAlbumsBySearch,
  getSongsBySearch
};
