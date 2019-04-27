import { GET_ALBUMS, ERROR_GET_ALBUMS, FETCH_GET_ALBUMS } from "./actionTypes";

// getAlbums

export const getAlbumsFetch = () => ({
  type: FETCH_GET_ALBUMS
});

export const getAlbumsSuccess = albums => ({
  type: GET_ALBUMS,
  payload: { albums }
});

export const getAlbumsError = error => ({
  type: ERROR_GET_ALBUMS,
  payload: { error }
});
