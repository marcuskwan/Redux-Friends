// import axios
import axios from "axios";
// import axiosWithAuth from "../utils/axiosWithAuth";

// logging in action
export const LOGGING_IN = "LOGGING_IN";

export const login = () => dispatch => {
  dispatch({ type: LOGGING_IN });
  axios.get(`http://localhost:5000`).then(res => console.log(res));
};
