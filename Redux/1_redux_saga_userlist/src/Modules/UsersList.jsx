import React,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import actionTypes from "../redux/actionTypes";
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from "react-router-dom";
import routes from "../routes";
export default function UsersList() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.listReducer);
  const loginedUser = useSelector((state)=> state.loginedUser);
  const navigate = useNavigate()
  useEffect(()=>{
    if(loginedUser){
        dispatch({type:actionTypes.GET_USERSLIST_REQUEST})
    }
    
  },[])
  if(loginedUser){
    return (
        <>
          <h1>User list</h1>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Website</th>
              </tr>
            </thead>
            <tbody>
              {users&&users.map(user=>(
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.website}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      );
  }else{
    return (
        <>
        <p>Bạn chưa đăng nhập</p>
        </>
    )
  }
  
}
