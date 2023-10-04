import React, { useState } from "react";
import axiosClient from "../api/axiosClient";
import { Link } from "react-router-dom";
import routes from "../routes";
import {v4 as uuidv4} from "uuid";
export default function Creation() {
  const [user, setUser] = useState({
    name: "",
  });
  const [error, setError] =useState("")
  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    if(user.name ===""|| user.name === null){
      setError("Fill the name field");
    }else{
      setError("")
    }
    if(error){  
        console.log("test")
        async function createUser(){
            await axiosClient.post("",{
                id:uuidv4,
                name: user.name

            })
            alert("Create successfully!!");
           
        }
        if(window.confirm("Do you want to create this user?")){
                createUser();       
        }
    }
  }
  return (
    <div style={{ margin: "50px" }}>
      <div className="d-flex justify-content-between mb-5">
        <h1>Create a new user</h1>
        <p>
          <Link to={routes.web.dashboard} className="btn btn-secondary">
            Back to Home
          </Link>
        </p>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <div className="mb-3">
              <label htmlFor="name">Name</label>
            </div>

            <input
              name="name"
              value={user.name}
              type="text"
              onChange={handleChange}
            />
            <button type="submit" className="btn btn-success ml-2">
              Add
            </button>
            {error&&<p style={{color:"red"}}>{error}</p>}
          </div>
        </form>
      </div>
    </div>
  );
}
