import React, { Component } from 'react'

export default class Calculator extends Component {
    constructor(props){
        super(props);
        this.state={
            formInput :{num1:"0",num2:"0"},
            operator: null
    }}
    handleInput= e =>{
        this.state.formInput[e.target.name] = e.target.value;
        this.setState({...this.state})
    }
    calculate = e =>{
        let result = null;
        let num1 = parseInt(this.state.formInput.num1);
        let num2 = parseInt(this.state.formInput.num2);
        switch(e.target.name){
            case "add":
                result= num1 +  num2;
                break;
            case "sub":
                result= num1 -  num2;
                break;
            case "multi":
                result= num1 * num2;
                break;
            case "div":
                result= num1 /  num2;
                break;

        }
        this.setState({...this.state, formInput:{...this.state.formInput, num1:result}})
        
    }
    render() {
        const{formInput} = this.state;
    return (
      <div style={{margin:"50px",border:"sodid 1px black"}}>
        <input type="number" name="num1"value={formInput.num1} onChange={this.handleInput}/>
        <br/>
        <br/>
        <input type="number" name="num2"value={formInput.num2} onChange={this.handleInput}/>
        <br/>
        <br/>
        <button name="add" type="button" onClick={this.calculate}>+</button>
        <button name="sub"type="button"onClick={this.calculate}>-</button>
        <button name="multi"type="button" onClick={this.calculate} >x</button>
        <button name="div"type="button" onClick={this.calculate}>/</button>
        
      </div>
    )
  }
}
