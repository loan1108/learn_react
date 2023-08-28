import React, { Component } from "react";

export default class Logout extends Component {
  returnLogin = () => {};
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <div>
          <h1>Welcome</h1>
          <button type="button" onClick={this.props.onLogOut}>
            Logout
          </button>
        </div>
      </div>
    );
  }
}
