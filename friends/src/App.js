import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import FriendsList from "./components/FriendsList";

function App() {
  return (
    <Router>
      <div className="App" />
      <Route path="/login" component={Login} />
      <Route path="/friends" component={FriendsList} />
    </Router>
  );
}

export default App;
