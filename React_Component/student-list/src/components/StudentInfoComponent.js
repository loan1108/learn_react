import React, { Component } from 'react'

export default class StudentInfoComponent extends Component {
  render() {
    const {data} = this.props;
    console.log(data)
    return (
      <table className='table'>
        <thead  className="thead-dark">
            <tr>
                <th scope='col'>Id</th>
                <th scope='col'>Name</th>
                <th scope='col'>Age</th>
                <th scope='col'>Address</th>
            </tr >
            
        </thead>
        <tbody>
          {data.map((student)=>
            <tr scope="row">
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.address}</td>
            </tr>
          )}

        </tbody>
      </table>
    )
  }
}
