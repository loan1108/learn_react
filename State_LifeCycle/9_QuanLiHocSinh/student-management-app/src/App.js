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
      selectedItem: null,
    };
  }

  changeValue = (e) => {
    this.state.form[e.target.name] = e.target.value;
    this.setState({ ...this.state });
    this.checkInvalidForm();
  };
  submitStudent = (form) => {
    console.log(this.state.isValid)
    if(this.state.isValid){
      if (this.state.selectedItem === null) {
        this.state.data.push({...form });
        this.setState({ ...this.state });
      }else{
        this.state.data[this.state.selectedItem] = this.state.form;
        this.state.selectedItem = null;
        this.state.form ={ name: "", phone: "", email: "" }
        this.setState({...this.state})
      }
    }
    
  };
  checkInvalidForm = () => {
    const { name, phone, email } = this.state.form;
    const value = name!==""  && phone!=="" && email!=="";
    this.setState({
      isValid: value,
    });
  };
  editStudent = (student, index) => {
    this.state.selectedItem = index;
    this.state.form = { ...student };
    this.setState({...this.state});
  };
  deleteStudent = (index) => {
    const deletingItem = this.state.data[index];
    this.state.data = this.state.data.filter((item) => item !== deletingItem);
    this.setState({
      ...this.state,
    });
  };
  render() {
    return (
      <>
        <AddStudentForm
          changeValue={this.changeValue}
          submitStudent={this.submitStudent}
          form={this.state.form}
          selectedItem={this.state.selectedItem}
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
