import React, { Component } from "react";

export default class AddStudentForm extends Component {
  
  submitStudent = (e) => {
    e.preventDefault();
    this.props.submitStudent({ ...this.form });
  };

  render() {
    this.form = this.props.form;
    return (
      <>
        <h1>Student List</h1>
        <form onSubmit={this.submitStudent}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={this.form.name}
            onChange={this.props.changeValue}
            placeholder="Input name"
          ></input>
          <br />
          <label>Phone</label>
          <input
            type="number"
            name="phone"
            value={this.form.phone}
            onChange={this.props.changeValue}
            placeholder="Input phone number"
          ></input>
          <br />
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={this.form.email}
            onChange={this.props.changeValue}
            placeholder="Input email"
          ></input>
          <br />
          <button type="submit">
            {this.props.selectedItem === null ? "Add" : "Update"}
          </button>
        </form>
      </>
    );
  }
}
