import React, { Component } from 'react'

export default class Hello extends Component {
    componentWillUnmount(){
        alert("this component is going to be unmounted")
    }
  render() {
    return (
      <div>Hello</div>
    )
  }
}
