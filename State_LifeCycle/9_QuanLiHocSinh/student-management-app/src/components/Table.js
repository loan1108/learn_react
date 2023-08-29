import React, { Component } from 'react'

export default class Table extends Component {
  render() {
    const {data,editStudent,deleteStudent} = this.props;
    
    return (
      <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {data&&data.map(student =>
                <tr>
                    <td>{student.name}</td>
                    <td>{student.phone}</td>
                    <td>{student.email}</td>
                    <td>
                        <button type ="button" onClick={()=>editStudent(student,data.indexOf(student))}>Edit</button>
                        <button type ="button" onClick ={()=>deleteStudent(data.indexOf(student))} >Delete</button>
                    </td>
                </tr>
            )}

        </tbody>
      </table>
    )
  }
}
