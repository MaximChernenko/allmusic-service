import {
  GET_ARTISTS,
  ERROR_GET_ARTISTS,
  FETCH_GET_ARTISTS
} from "./actionTypes";

// getArtist

export const getArtistsFetch = () => ({
  type: FETCH_GET_ARTISTS
});

export const getArtistsSuccess = artists => ({
  type: GET_ARTISTS,
  payload: { artists }
});

export const getArtistsError = error => ({
  type: ERROR_GET_ARTISTS,
  payload: { error }
});
