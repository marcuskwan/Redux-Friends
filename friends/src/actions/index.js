// import axiosWithAuth
import { axiosWithAuth } from "../utils/axiosWithAuth";
// import axios
import axios from "axios";

// exporting type variables
export const LOGGING_IN = "LOGGING_IN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const login = credentials => dispatch => {
  console.log(credentials);
  dispatch({ type: LOGGING_IN });
  //   axiosWithAuth
  //     .post(`/login`, credentials)
  // return
  return axios
    .post(`http://localhost:5000/api/login`, credentials)
    .then(res => {
      console.log(res);
      localStorage.setItem("token", res.data.payload);
      dispatch({ type: LOGIN_SUCCESS });
      //   return true;
    })
    .catch(err => {
      console.log(err.response);
      //   dispatch({ type: LOGIN_FAILURE, payload: err.response });
    });
};

export const FETCHING_DATA = "FETCHING_DATA";
export const FETCHING_SUCCESS = "FETCHING_SUCCESS";
export const FETCHING_FAILURE = "FETCHING_FAILURE";

export const getData = () => dispatch => {
  dispatch({ type: FETCHING_DATA });
  axiosWithAuth()
    .get(`/friends`)
    .then(res => {
      //   console.log(res);
      dispatch({ type: FETCHING_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: FETCHING_FAILURE, payload: err.response.data });
    });
};
