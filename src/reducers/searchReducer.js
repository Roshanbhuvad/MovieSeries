/* the reducer is testing the action and each action has two parameters
  first one is the type which will making their user recognizing this action, the reducer is recognizing the action by
   its type  depending on the type it will take a new state and setting a new state depending on the type of action
   and second paramter is payload payload is the data which is coming from the action  */

import { SEARCH_MOVIE, FETCH_MOVIES } from "../actions/types";

const initialState = {
  text: "",
  movies: [],
  loading: false,
  movie: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SEARCH_MOVIE:
      return {
        ...state,
        text: action.payload,
        loading: false,
      };
    case FETCH_MOVIES:
      return {
        ...state,
        movies: action.payload,
      };
    default:
      return state;
  }
}
