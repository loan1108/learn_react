import React, { useState,useEffect } from "react";
import { Formik } from "formik";
import {useDispatch, useSelector} from "react-redux";
import actionTypes from "../redux/actionTypes";
import { useNavigate } from "react-router-dom";
import routes from "../routes";
export default function Login() {
  const [user] = useState({ userName: "", password: "" });
  const dispatch = useDispatch(); 
  const loginedUser = useSelector(state=>state.loginReducer.loginedUser)
  const navigate = useNavigate()
  return (
    <Formik
      initialValues={user}
      validate={values=>{
        const errors={}; 
        if(!values.userName){
            errors.userName="Fill the userName field!"
        }else{
            if(loginedUser.userName){
                if(values.userName !== loginedUser.userName){
                    errors.userName="UserName is incorrect"
                }
            }
        }
        if(!values.password){
            errors.password="Fill the password field"
        }else{
            if(loginedUser.password){
                if(values.password !== loginedUser.password){
                    errors.password="Password is incorrect"
                }
            }
        }
        return errors
      }}
      onSubmit={(values) => {
        dispatch({type:actionTypes.LOGIN, payload: values});
        if(loginedUser.userName){
            navigate(routes.web.dashboard)
        }
      }}
    >
      {({ values, handleSubmit, handleChange, handleBlur, errors }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <p>
              <label htmlFor="userName">UserName</label>
            </p>
            <p>
              <input
                type="text"
                name="userName"
                autoComplete="current-userName"
                value={values.userName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </p>
            {errors&&errors.userName&&<p style={{color:"red"}}>{errors.userName}</p>}
          </div>
          <div>
            <p>
              <label htmlFor="password">password</label>
            </p>
            <p>
              <input
                type="password"
                name="password"
                autoComplete="current-password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </p>
            {errors&&errors.password&&<p style={{color:"red"}}>{errors.password}</p>}
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </Formik>
  );
}
