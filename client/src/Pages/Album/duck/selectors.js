import { createSelector } from "reselect";
import * as R from "ramda";

const getAlbums = state => state.albums;
const getArtists = state => state.artists;

const getArtistById = createSelector(
  [getArtists, (state, id) => id],
  (artists, id) => artists[id]
);

const getAlbumsById = createSelector(
  [getAlbums, (state, ids) => ids],
  (albums, ids) => R.map(id => albums[id])(ids)
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
  albums =>
    R.pipe(
      Object.keys,
      R.map(id => albums[id]),
      R.filter(album => album.isRecommended)
    )(albums)
);

export default {
  getAlbums,
  getAlbumsById,
  getAlbumById,
  getArtistByAlbum,
  getArtistById,
  getRecommendedAlbums
};
