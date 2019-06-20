import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../actions";

export class Login extends Component {
  state = {
    username: "",
    password: ""
  };
  handleChanges = event => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };
  componentDidMount() {
    login();
  }
  render() {
    return (
      <div>
        <form>
          <input
            onChange={this.handleChanges}
            name="username"
            placeholder="username"
            value={this.state.username}
          />
          <input
            onChange={this.handleChanges}
            name="password"
            placeholder="password"
            value={this.state.password}
          />
          <button>Login</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  error: state.error,
  loggingIn: state.loggingIn
});

export default connect(
  mapStateToProps,
  { login }
)(Login);
