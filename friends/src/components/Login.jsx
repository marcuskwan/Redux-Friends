import React, { Component } from "react";
// import login AC
import { login } from "../actions";
// import connect so mstp can use reducer's state
import {connect} from "react-redux";
class Login extends Component {
  state = {
    username: "",
    password: "",
  };
  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <input
            type="text"
            value={this.state.username}
            onChange={this.changeHandler}
          />
          <input
            type="password"
            value={this.state.password}
            onChange={this.changeHandler}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
  changeHandler = (event) => {
    event.preventDefault();
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value,
    });
  };
  submitHandler = (event) => {
    const credentials = {
      username: this.state.username,
      password: this.state.password,
    };
    event.preventDefault();
    this.props.login(credentials);
  };
}
const mapStateToProps = (state) => {};

export default connect(
  mapStateToProps,
  { login },
)(Login);
