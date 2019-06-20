// importing type variables
import { LOGGING_IN } from "../actions";

// building initialState
const initialState = {
  // setting friends to empty array
  friends: [],
  error: "",
  loggingIn: false
};

// making root reducer, accepts state and action as params
export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGGING_IN:
      return {
        ...state,
        loggingIn: true
      };
    default:
      return state;
  }
};
