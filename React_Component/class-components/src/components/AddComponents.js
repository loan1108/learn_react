import React, { Component } from 'react'

export default class AddComponents extends Component {
  render() {
    return <h1>Total:{this.props.firstNumber + this.props.secondNumber}</h1>
  }
}
