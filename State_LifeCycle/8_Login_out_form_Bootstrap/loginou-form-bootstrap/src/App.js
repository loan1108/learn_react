import React, { Component } from 'react'
import Home from './components/Home'
export default class App extends Component {
  constructor(props){
    super(props); 
    this.state ={
      form:{email:"", password:"", isRemember:false},
      isValid:false,
      isLogginIn :false
    }

  }
  handleChange = (e) =>{
    this.state.form[e.target.name] = e.target.value;
    this.setState({...this.state});
    this.checkValidForm()
  }
  handleChangeCheckbox = () =>{
    this.state.form.isRemember = !this.state.form.isRemember; 
    this.setState({...this.state}); 
    this.checkValidForm()
  }
  checkValidForm = () =>{
    const{email,password} = this.state.form;
    const value = email && password; 
    this.setState({isValid:value})
  }
  handleSubmit = () =>{
    if(this.state.isValid){
      this.setState({isLogginIn:true})
    }
  }
  handleLogOut = ()=>{
    this.setState({isLogginIn:false})
  }
  render() {
    const{form, isLogginIn} = this.state;
    if(isLogginIn) return (<Home onLogout = {this.handleLogOut}/>)
    return (
      <div className="container d-flex align-items-center text-center">
        <div className="form-signin">
          <form>
            <img className="mb-4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png" alt="" width="72" height="57" />
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
            <div className="form-floating">
              <input className="form-control email" type="email" name="email" placeholder="name@example.com" value={form.email} onChange={this.handleChange} />
              <label>Email address</label>
            </div>
            <div className="form-floating">
              <input className="form-control password" type="password" name="password" placeholder="Password" value={form.password} onChange={this.handleChange} />
              <label>Password</label>
            </div>
            <div className="checkbox mb-3">
              <label>
                <input type="checkbox" value={form.isRemember} onChange={this.handleChangeCheckbox} /> Remember me
              </label>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="button" onClick={this.handleSubmit} >Sign in</button>
            <p className="mt-5 mb-3 text-muted">© 2017–2021</p>
          </form>
        </div>
      </div>
    )
  }
}

