import React, { useState } from 'react'
import {Formik} from "formik"
import loginUserSchema from '../../validateSchema/loginUserSchema'
import axiosClient from '../../api/axiosClient'
import routes from '../../routes'
import { useNavigate } from 'react-router-dom'
export default function Login() {
  const [loginUser,]=useState({userName:"",password:""})
  const navigate = useNavigate();
  return (
    
    <div style={{ margin: "50px" }}>
      <h1>Đăng nhập</h1>
      <Formik
        initialValues={loginUser}
        enableReinitialize
        validationSchema={loginUserSchema}
        onSubmit={(values) => {
          async function fetchLoginUser() {
            const data = await axiosClient.get("/users");
            const index =
              data &&
              data.findIndex(
                (appUser) =>
                  appUser.userName === {...values}.userName &&
                  appUser.password === {...values}.password
              );
              console.log(index)
            if(index !==-1){
              window.localStorage.setItem("loginUser", JSON.stringify(data[index]))
                navigate(`${routes.web.home}/${data[index].id}`)
            }else{
              alert("Xác nhận lại tên đăng nhập và mật khẩu")
            }
        }
        fetchLoginUser()
        }}
      >
        {({ values, errors, handleBlur, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <p>
                <label htmlFor="userName">Tên đăng nhập</label>
              </p>
              <p>
                <input
                  type="text"
                  name="userName"
                  value={values.userName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoComplete="current-userName"
                />
              </p>
              {errors.userName && (
                <p style={{ color: "red" }}>{errors.userName}</p>
              )}
            </div>
            <div>
              <p>
                <label htmlFor="password">Mật khẩu</label>
              </p>
              <p>
                <input
                  type="password"
                  name="password"
                  value={values.password}
                  autoComplete="current-password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </p>
              {errors.password && (
                <p style={{ color: "red" }}>{errors.password}</p>
              )}
            </div>
            <div>
              <button type="submit" className="btn btn-primary">
                Đăng nhập
              </button>
            </div>
          </form>
        )}
      </Formik>
      </div>
  )
}
