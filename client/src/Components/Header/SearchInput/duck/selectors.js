import { createSelector } from "reselect";
import * as R from "ramda";

const getSearch = state => state.search.value;

const getArtists = state => state.artists;

const getAlbums = state => state.albums;

const getSongs = state => state.songs;

const getAdvancedSearch = state => state.search.advancedSearch;

const getArtistsBySearch = createSelector(
  [getSearch, getArtists, getAdvancedSearch],
  (filter, artists, advancedSearch) => {
    if (advancedSearch) {
      return [];
    }
    return R.pipe(
      Object.keys,
      R.map(id => artists[id]),
      R.filter(artist => R.includes(R.toLower(filter))(R.toLower(artist.name)))
    )(artists);
  }
);

const getAlbumsBySearch = createSelector(
  [getSearch, getAlbums, getAdvancedSearch],
  (filter, albums, advancedSearch) => {
    const keys = Object.keys(albums);
    const albumsArr = keys.map(id => albums[id]);
    if (advancedSearch) {
      return R.filter(album =>
        R.allPass([
          checkRating(advancedSearch.rating, album.rating),
          checkDate(advancedSearch.date, album.releaseDate),
          checkGenreOrStyle(
            advancedSearch.genreOrStyle,
            album.genre,
            album.styles
          )
        ])
      )(albumsArr);
    }
    return R.filter(album =>
      R.includes(R.toLower(filter))(R.toLower(album.name))
    )(albumsArr);
  }
);

// helpers for getAlbumsByAdvSearch

function checkRating(advSearchRating, albumRating) {
  return Number(advSearchRating) === albumRating;
}

function checkDate(advSearchDate, albumRelDate) {
  const splittedDate = albumRelDate.split(" ");
  const albumDate = splittedDate[splittedDate.length - 1];
  return advSearchDate === albumDate;
}

function checkGenreOrStyle(advSearchGenreOrStyle, albumGenre, albumStyles) {
  const genre = albumGenre.split(", ");
  return R.anyPass([
    R.includes(advSearchGenreOrStyle)(genre),
    R.includes(advSearchGenreOrStyle)(albumStyles)
  ]);
}

const getSongsBySearch = createSelector(
  [getSearch, getSongs, getAdvancedSearch],
  (filter, songs, advancedSearch) => {
    if (advancedSearch) {
      return [];
    }
    return R.pipe(
      Object.keys,
      R.map(id => songs[id]),
      R.filter(song => R.includes(R.toLower(filter))(R.toLower(song.name)))
    )(songs);
  }
);

export default {
  getSearch,
  getArtistsBySearch,
  getAlbumsBySearch,
  getSongsBySearch
};
