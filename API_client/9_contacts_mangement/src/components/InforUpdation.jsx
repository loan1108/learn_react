import React from "react";
import { Formik } from "formik";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import userSchema from "../userSchema";
import { useParams } from "react-router-dom";
// import { useEffect } from "react";
import axiosClient from "../api/axiosClient";

export default function InforUpdation() {
  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const { userId } = useParams();
  useEffect(() => {
    let data = {};
    async function fetchUser() {
      data = await axiosClient.get(`${userId}`);
      console.log(data);
      // setUser({...user, name:data.name, phone:data.phone, email:data.email})
    }
    console.log(setUser());
    fetchUser();
    setUser(data);
  }, []);
  return (
    <div style={{ margin: "20px" }}>
      <h1>Edit contact</h1>
      <Formik
        initialValues={user}
        validationSchema={userSchema}
        onSubmit={(values, formState) => {
          console.log("test:", values);
          formState.resetForm();
        }}
      >
        {({ values, errors, handleSubmit, handleChange, handleBlur }) => (
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <div>
                <label htmlFor="name">Name</label>
              </div>

              <input
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
            </div>
            <div className="mb-3">
              <div>
                <label htmlFor="email">Email</label>
              </div>

              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
            </div>
            <div className="mb-3">
              <div>
                <label htmlFor="phone">Phone</label>
              </div>

              <input
                type="number"
                name="phone"
                onChange={handleChange}
                onBlur={handleBlur}
                values={values.phone}
              />
              {errors.phone && <p style={{ color: "red" }}>{errors.phone}</p>}
            </div>
            <button type="submit" className="btn btn-info">
              Save
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}
