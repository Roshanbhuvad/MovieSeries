//each action is a function

import { SEARCH_MOVIE } from "./types";

export const searchMovie = (text) => (dispatch) => {
  // just dispatching the action type and the action payload which will make the reducer recognize the action
  dispatch({
    type: SEARCH_MOVIE,
    payload: text,
  });
};
