import React, { useState } from "react";
import { Formik } from "formik";
import singUpUserSchema from "../../validateSchema/signUpUserSchema"
import{v4 as uuidv4} from "uuid";
import axiosClient from "../../api/axiosClient";
import routes from "../../routes";
import { useNavigate } from "react-router-dom";
export default function SignUp() {
  const navigate = useNavigate()
  const [signUpUser,] = useState({
    id: "",
    userName: "",
    address: "",
    password: "",
    phone: "",
  });
  return (
    <div style={{ margin: "50px" }}>
      <h1>Tạo tài khoản</h1>
      <Formik
        initialValues={signUpUser}
        enableReinitialize
        validationSchema={singUpUserSchema}
        onSubmit={(values) => {
          const userId = uuidv4()
          console.log(userId)
          async function createUser(){
            await axiosClient.post("/users",{...values, id:userId})
            window.localStorage.setItem("loginUser", JSON.stringify({...values,id:userId})) 
            alert("Đăng nhập thành công.Đi đến màn dashboard!")
            navigate(`${routes.web.home}/${userId}`)
          }
          createUser()
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
                <label htmlFor="address">Địa chỉ</label>
              </p>
              <p>
                <input
                  type="text"
                  name="address"
                  value={values.address}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoComplete="current-address"
                />
              </p>
              {errors.address && (
                <p style={{ color: "red" }}>{errors.address}</p>
              )}
            </div>
            <div>
              <p>
                <label htmlFor="phone">Số điện thoại</label>
              </p>
              <p>
                <input
                  type="number"
                  name="phone"
                  autoComplete="current-phone"
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </p>
              {errors.phone && <p style={{ color: "red" }}>{errors.phone}</p>}
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
                Tạo tài khoản
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}
