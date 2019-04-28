import { SEARCH_DATA, SEARCH_CLEAR, GET_ARTIST } from "./actionTypes";

export const searchData = filter => ({
  type: SEARCH_DATA,
  payload: { filter }
});

export const searchClear = () => ({
  type: SEARCH_CLEAR
});

export const getArtist = artist => ({
  type: GET_ARTIST,
  payload: { artist }
});
