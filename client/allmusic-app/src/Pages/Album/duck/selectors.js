import { createSelector } from "reselect";

const getAlbums = state => state.albums;
const getArtists = state => state.artists;

const getArtistById = createSelector(
  [getArtists, (state, id) => id],
  (artists, id) => artists[id]
);

const getAlbumsById = createSelector(
  [getAlbums, (state, ids) => ids],
  (albums, ids) => ids.map(id => albums[id])
);

const getAlbumById = createSelector(
  [getAlbums, (state, id) => id],
  (albums, id) => albums[id]
);

const getArtistByAlbum = createSelector(
  [getArtists, getAlbumById],
  (artists, album) => (album ? artists[album.band] : null)
);

const getRecommendedAlbums = createSelector(
  [getAlbums],
  albums => {
    const keys = Object.keys(albums);
    const albumsArr = keys.map(id => albums[id]);
    return albumsArr.filter(album => album.isRecommended);
  }
);

export default {
  getAlbums,
  getAlbumsById,
  getAlbumById,
  getArtistByAlbum,
  getArtistById,
  getRecommendedAlbums
};
