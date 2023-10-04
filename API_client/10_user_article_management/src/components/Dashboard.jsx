import React, { useState, useEffect } from "react";
import axiosClient from "../api/axiosClient";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import routes from "../routes";
export default function Dashboard() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function fetchUsers() {
      const data = await axiosClient.get();
      setUsers(data);
    }
    fetchUsers();
  }, []);
  function handleDelete(id) {
    async function deleteUser() {
      await axiosClient.delete(`${id}`);
      setUsers(users.filter((user) => user.id !== id));
    }
    deleteUser();
  }
  return (
    <div style={{ margin: "50px", width: "1500px" }}>
      <div className="d-flex justify-content-between mb-5">
        <h1>Users</h1>
        <p>
          <Link to={routes.web.creation} className="btn btn-info">
            Add User
          </Link>
        </p>
      </div>
      <div>
        <table className="table" style={{ width: "1000px" }}>
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td className="btn-group" role="group">
                    <Link
                      to={`${routes.web.detail}/${user.id}`}
                      type="button"
                      className="btn btn-info"
                    >
                      Edit
                    </Link>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => handleDelete(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}