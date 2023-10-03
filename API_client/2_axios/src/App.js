import React,{useEffect, useState} from 'react'
import axios from "axios"
export default function App() {
  const [users, setUsers] = useState([])
  useEffect(()=>{
    axios.get("http://localhost:3001/api/users")
    .then(res=>{
      const newUsers = [...users]//
      setUsers(res.data)
    })

  },[])
  return (
    <>
    <div>
      <h1>Users</h1>
      <ul>
        {users&& users.map(user=> (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      {/* <button type="button">Create</button> */}
    </div>
    </>
  )
}
