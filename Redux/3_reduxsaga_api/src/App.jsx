import React from "react";
import { useDispatch, useSelector } from "react-redux";
import actionTypes from "./redux/actionTypes";
import 'bootstrap/dist/css/bootstrap.css';

export default function App() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.usersReducer);
  return (
    <>
      <h1>User list</h1>
      <button
      className="btn btn-primary"
        type="button"
        onClick={() =>
          dispatch({ type: actionTypes.GET_USERS_REQUEST, payload: [] })
        }
      >
        Get users
      </button>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Website</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {users&&users.map(user=>(
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.website}</td>
              <td>
                <button className="btn btn-danger"type="button" onClick={()=>dispatch({type:actionTypes.DELETE_USER_REQUEST, payload:user.id})}>Delete User</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
