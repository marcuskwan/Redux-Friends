import React, { Component } from "react";

export class Login extends Component {
  state = {
    username: "",
    password: ""
  };
  render() {
    return (
      <div>
        <form>
          <input
            name="username"
            placeholder="username"
            value={this.state.username}
          />
          <input
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
