import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
export default class Alert extends Component {
  render() {
    return (
      <div class="alert alert-warning" role="alert">
        {this.props.text}
      </div>
    )
  }
}
