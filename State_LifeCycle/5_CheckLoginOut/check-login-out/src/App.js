import React, { Component } from "react";
import Logout from "./components/Logout";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }
  handleLogin = () => {
    this.setState({ isLoggedIn: true });
  };
  handleLogOut = () => {
    this.setState({ isLoggedIn: false });
  };
  render() {
    const { isLoggedIn } = this.state;
    if (isLoggedIn) {
      return <Logout onLogOut={this.handleLogOut}></Logout>;
    } else {
      return (
        <div style={{ textAlign: "center" }}>
          <div>
            <h1>Please Log in</h1>
            <button onClick={this.handleLogin}>Log in</button>
          </div>
        </div>
      );
    }
  }
}
