import React, { Component } from "react";

export class Login extends Component {
  state = {
    username: "",
    password: ""
  };
  handleChanges = event => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };
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

export default Login;
