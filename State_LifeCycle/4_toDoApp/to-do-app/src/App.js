import React, { Component } from 'react'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      list:[],
      item:""
    }
  }
changeItem = e =>{
  // this.state.item = e.target.value;
  this.setState({
    ...this.state,
    item : e.target.value
  })
}
addItem = (e) =>{
  this.state.list.push(this.state.item);
  this.setState({
    ...this.state
  })
}
  render() {
    return (
      <div>
        <h2>ToDo List</h2>
        <input value={this.state.item} type="text" onChange={this.changeItem}/>
        <button type="button" onClick={this.addItem}>Add</button>
        <ul>
          {this.state.list.map(item=><li>{item}</li>)}
        </ul>
      </div>
    )
  }
}
