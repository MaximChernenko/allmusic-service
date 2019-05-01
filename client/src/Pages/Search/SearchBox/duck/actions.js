import {
  SET_ALL_FILTER,
  SET_ARTIST_FILTER,
  SET_ALBUM_FILTER,
  SET_SONG_FILTER
} from "./actionTypes";

export const setAllFilter = () => ({
  type: SET_ALL_FILTER
});

export const setArtistFilter = () => ({
  type: SET_ARTIST_FILTER
});

export const setAlbumFilter = () => ({
  type: SET_ALBUM_FILTER
});

export const setSongFilter = () => ({
  type: SET_SONG_FILTER
});
