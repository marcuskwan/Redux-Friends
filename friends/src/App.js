import React from "react";
// import route for assigning urls to components
import { Route } from "react-router-dom";
// import components
import Login from "./components/Login";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Route path="/login" component={Login} />
      <div>hi</div>
    </div>
  );
}

export default App;
