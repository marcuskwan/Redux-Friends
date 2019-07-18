// import axios
import axios from "axios";
export const LOGIN_START = "LOGIN_START";
export const login = (credentials) => (dispatch) => {
  dispatch({ type: LOGIN_START });
  axios
    .post("http://localhost:5000", credentials)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};
