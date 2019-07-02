// importing type variables
import {
  LOGGING_IN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  FETCHING_DATA,
  FETCHING_SUCCESS,
  FETCHING_FAILURE
} from "../actions";

// building initialState
const initialState = {
  // creating properties
  deletingFriend: false,
  fetchingFriends: false,
  friends: [],
  loggingIn: false,
  savingFriends: false,
  updatingFriend: false,
  error: ""
};

// making root reducer, accepts state and action as params
export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGGING_IN:
      return {
        ...state,
        loggingIn: true,
        error: ""
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        error: ""
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loggingIn: false,
        error: action.payload
      };
    case FETCHING_DATA:
      return {
        ...state,
        fetchingFriends: true,
        loggingIn: true,
        error: ""
      };
    case FETCHING_SUCCESS:
      return {
        ...state,
        fetchingFriends: false,
        loggingIn: true,
        error: "",
        friends: action.payload
      };
    case FETCHING_FAILURE:
      return {
        ...state,
        fetchingFriends: false,
        loggingIn: true,
        error: action.payload
      };
    default:
      return state;
  }
};
