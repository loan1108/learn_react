import React, { useState, useEffect } from "react";
import axiosClient from "../api/axiosClient";
import routes from "../routes";
import {Link} from "react-router-dom"
import { v4 as uuidv4 } from "uuid";
export default function Users() {
  const [users, setUsers] = useState([]);
  const[user, setUser] = useState({})
  useEffect(() => {
    async function fetchUsers() {
      console.log(routes.api.users.list)
      const data = await axiosClient.get(routes.api.users.list);
      console.log(data);
      setUsers(data);
    }
    fetchUsers();
  }, []);
  function handleChange(e){
    setUser({...user, [e.target.name]:e.target.value})
  }
  function handleSubmit(e){
    e.preventDefault(); 
    async function createUser(){
      await axiosClient.post(routes.api.users.list,{
        id: uuidv4, 
        name:user.name,
        birthday: user.birthday
      })
    }
    
    createUser(); 
    const copiedList = [...users]; 
    copiedList.push(user); 
    setUsers(copiedList)

  }
  return (
    <>
    <div> 
      <h1> Create a new user</h1>
      <form onSubmit={handleSubmit}> 
      <div>
        <label htmlFor='name'>Name</label>
        <input type="text" name="name" value={user.name} onChange={handleChange}/>
      </div>
      <div>
        <label htmlFor='birthday'>Birthday</label>
        <input type="date" name="birthday" value={user.birthday} onChange={handleChange}/>
      </div>
      <button type="submit">Create</button>
      </form>
    </div>
      <h1>Users</h1>
      <div>
        {users &&
          users.map((user) => (
            <>
              <p>
                <Link to={`${routes.web.users.index}/${user.id}`}>{user.name}</Link>
              </p>
            </>
          ))}
      </div>
    </>
  );
}
