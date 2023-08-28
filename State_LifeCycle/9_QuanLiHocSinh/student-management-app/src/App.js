import React, { Component } from "react";
import Table from "./components/Table";
import AddStudentForm from "./components/AddStudentForm";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: "Nguyễn Văn A", phone: "0123456789", email: "abc@gmail.com" },
      ],
      form: { name: "", phone: "", email: "" },
      isValid: false,
    };
  }

  changeValue = (e) => {
    this.state.form[e.target.name] = e.target.value;
    this.setState({ ...this.state });
    this.checkInvalidForm();
  };
  addStudent = () => {

    if(this.state.isValid){
      this.state.data.push({ ...this.state.form });
      this.setState({ ...this.state });
    }
  };
  checkInvalidForm = () => {
    const { name, phone, email } = this.state.form;
    const value = name && phone && email;
    this.setState({
      isValid: value,
    });
  };
  editStudent =(student)=>{
    this.state.form = {...student};
    this.setState({
      ...this.state
    })
  }
  render() {
    
      return (
        <>
          <AddStudentForm
            changeValue={this.changeValue}
            addStudent={this.addStudent}
            form={this.state.form}
          />
          <Table
            editStudent={this.editStudent}
            deleteStudent={this.deleteStudent}
            data={this.state.data}
            
          />
        </>
      );
    }
  
}
