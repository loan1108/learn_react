import React, { Component } from 'react'

export default class App extends Component {
  constructor(props){
    super(props); 
    this.state = {
      number:0
    }
  }
  decrease = e =>{
    this.setState({
      ...this.state,
      number: this.state.number -=1
    })

  }
  increase = e=>{
    this.setState({
      ...this.state,
      number: this.state.number +=1
    })

  }
  render() {
    return (
      <div style={{margin: "20px"}}>
        <button type="button" onClick={this.decrease}>Decrease</button>
        <span>{this.state.number}</span>
        <button type="button" onClick={this.increase}>Increase</button>
      </div>
    )
  }
}
