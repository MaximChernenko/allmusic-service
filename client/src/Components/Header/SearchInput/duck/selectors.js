import { createSelector } from "reselect";

const getSearch = state => state.search;

const getArtists = state => state.artists;

const getAlbums = state => state.albums;

const getSongs = state => state.songs;

const getAdvancedSearch = state => state.advancedSearch;

const getArtistsBySearch = createSelector(
  [getSearch, getArtists, getAdvancedSearch],
  (filter, artists, advancedSearch) => {
    const advSearchKeys = Object.keys(advancedSearch);
    if (advSearchKeys.length > 0) {
      return [];
    }
    const keys = Object.keys(artists);
    const artistsArr = keys.map(id => artists[id]);
    return artistsArr.filter(artist =>
      artist.name.toLowerCase().includes(filter)
    );
  }
);

const DEFAULTS = {
  genreOrStyle: "",
  date: 2019,
  rating: 1
};

const getAlbumsBySearch = createSelector(
  [getSearch, getAlbums, getAdvancedSearch],
  (filter, albums, advancedSearch) => {
    const advSearchKeys = Object.keys(advancedSearch);
    const keys = Object.keys(albums);
    const albumsArr = keys.map(id => albums[id]);
    if (advSearchKeys.length > 0) {
      return albumsArr.filter(
        album =>
          checkRating(advancedSearch.rating, album.rating) &&
          checkDate(advancedSearch.date, album.releaseDate) &&
          checkGenreOrStyle(
            advancedSearch.genreOrStyle,
            album.genre,
            album.styles
          )
      );
    }
    return albumsArr.filter(album => album.name.toLowerCase().includes(filter));
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
  return (
    genre.includes(advSearchGenreOrStyle) ||
    albumStyles.includes(advSearchGenreOrStyle)
  );
}

const getSongsBySearch = createSelector(
  [getSearch, getSongs, getAdvancedSearch],
  (filter, songs, advancedSearch) => {
    const advSearchKeys = Object.keys(advancedSearch);
    if (advSearchKeys.length > 0) {
      return [];
    }
    const keys = Object.keys(songs);
    const songsArr = keys.map(id => songs[id]);
    return songsArr.filter(song => song.name.toLowerCase().includes(filter));
  }
);

export default {
  getSearch,
  getArtistsBySearch,
  getAlbumsBySearch,
  getSongsBySearch
};
