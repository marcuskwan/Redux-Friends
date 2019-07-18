import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
// import createStore method for redux
import { createStore, applyMiddleware } from "redux";
// importing rootReducer because the store needs access to the state within reducer?
import { reducer } from "./reducers";
// import thunk
import thunk from "redux-thunk";
// import router
import { BrowserRouter as Router } from "react-router-dom";
// importing Provider, I think App can't have access to props for some reason unless PRovider is here
import { Provider } from "react-redux";
// creating store that our components will pull data from
const store = createStore(reducer, applyMiddleware(thunk));
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,

  document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
