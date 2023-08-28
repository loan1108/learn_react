import React, { Component } from "react";

export default class AddStudentForm extends Component {
  render() {
    const {changeValue,addStudent,form} = this.props;
    return (
      <>
        <h1>Student List</h1>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={changeValue}
          placeholder="Input name"
        ></input>
        <br />
        <label>Phone</label>
        <input
          type="number"
          name="phone"
          value={form.phone}
          onChange={changeValue}
          placeholder="Input phone number"
        ></input>
        <br />
        <label>Email</label>
        <input
          type="text"
          name="email"
          value={form.email}
          onChange={changeValue}
          placeholder="Input email"
        ></input>
        <br />
        <button type="button" onClick={addStudent}>
          Add
        </button>
      </>
    );
  }
}
