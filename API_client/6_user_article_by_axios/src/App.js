import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import axios from "axios";
function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function fetchUsers() {
      const data = await axios.get("http://localhost:3001/users?_embed=article");
      console.log(data.data)
      setUsers(data.data);
    }
    fetchUsers()
  },[]);
  return (
    <>
      <h1>Users</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Article Number</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.article.length}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
