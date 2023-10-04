import React,{useEffect, useState} from "react";
import axiosClient from "../api/axiosClient";
import{Link}  from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import routes from "../routes";
// import { useEffect,useState } from "react";
export default function Dashboard() {
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    async function fetchUsers(){
        const data = await axiosClient.get(); 
        console.log(data)
        setUsers(data)
    }
    fetchUsers()
  },[])
  function handleDelete(id){
    async function deleteUser(){
        await axiosClient.delete(`${id}`); 
        setUsers(users.filter(user=> user.id !== id))
    }
    deleteUser()
  }
  return (
    <div style={{margin:"20px"}}>
      <div className='d-flex justify-content-between mb-5 mt-5'>
        <h1>Contacts</h1>
        <p >
          <Link to={routes.web.users.creation}style={{width:"150px"}} type="button" className="btn btn-info">Add Contact</Link>
        </p>
      </div>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users&&users.map(user=>(
                <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td className="btn-group" role="group">
                        <Link to={`${routes.web.users.index}/${user.id}`} type="button" className="btn btn-info">Edit</Link>
                        <button type="button" className="btn btn-danger" onClick={()=>handleDelete(user.id)}>Delete</button>
                    </td>
                </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
