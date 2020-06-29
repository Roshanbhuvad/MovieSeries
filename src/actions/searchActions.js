//each action is a function

import { FETCH_MOVIES, SEARCH_MOVIE, FETCH_MOVIE, LOADING } from "./types";
import axios from "axios";

import { APIKey } from "../APIKey";

export const searchMovie = (text) => (dispatch) => {
  // just dispatching the action type and the action payload which will make the reducer recognize the action
  dispatch({
    type: SEARCH_MOVIE,
    payload: text,
  });
};

export const fetchMovies = (text) => (dispatch) => {
  axios
    .get(`http://www.omdbapi.com/?i=tt3896198&apikey=${APIKey}&s=${text}`)
    .then((response) =>
      dispatch({
        type: FETCH_MOVIES,
        payload: response.data,
      })
    )
    .catch((err) => console.log(err));
};

export const fetchMovie = (id) => (dispatch) => {
  axios
    .get(`http://www.omdbapi.com/?i=tt3896198&apikey=${APIKey}&i=${id}`)
    .then((response) =>
      dispatch({
        type: FETCH_MOVIE,
        payload: response.data,
      })
    )
    .catch((err) => console.log(err));
};

export const setLoading = () => {
  return {
    type: LOADING,
  };
};
