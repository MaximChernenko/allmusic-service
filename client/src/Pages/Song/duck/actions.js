import { GET_SONGS, FETCH_GET_SONGS, ERROR_GET_SONGS } from "./actionTypes";

// getSongs

export const getSongsFetch = () => ({
  type: FETCH_GET_SONGS
});

export const getSongsSuccess = songs => ({
  type: GET_SONGS,
  payload: { songs }
});

export const getSongsError = error => ({
  type: ERROR_GET_SONGS,
  payload: { error }
});
