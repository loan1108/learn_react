import React, {useState} from "react";
import {useNavigate} from "react-router-dom"
export default function Employees() {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Hoa",
      age: 20,
    },
    {
      id: 2,
      name: "Khánh",
      age: 25,
    },
    {
      id: 3,
      name: "Tú",
      age: 22,
    },
  ]);
  const navigate = useNavigate()
  function viewDetail(employee){
    console.log(employee)
    navigate(`/employees/${employee.id}/${employee.name}/${employee.age}`)
  }
  return (
    <div>
      <h1 className="mx-auto" style={{width:"300px"}}>Employees List</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
            {employees&&employees.map(employee=>
                <tr>
                    <td>{employee.id}</td>
                    <td>{employee.name}</td>
                    <td>{employee.age}</td>
                    <td><button type="button" className="btn btn-info" onClick={()=>viewDetail(employee)}>Detail</button></td>
                </tr>
            )}
        </tbody>
      </table>
    </div>
  );
}
