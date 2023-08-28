import React, { Component } from "react";

export default class CollapseContent extends Component {
  
  render() {
    return (
      <>
        <button type="button" onClick={this.props.expand}>Xem giới thiệu</button>
      </>
    );
  }
}
