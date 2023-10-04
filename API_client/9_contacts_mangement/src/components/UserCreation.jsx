import React from "react";
import { Formik } from "formik";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import userSchema from "../userSchema";
import axiosClient from "../api/axiosClient";
import routes from "../routes";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
export default function UserCreation() {
  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const navigate = useNavigate();

  return (
    <div style={{ margin: "20px" }}>
      <h1>Add contact</h1>
      <Formik
        initialValues={user}
        validationSchema={userSchema}
        onSubmit={(values, formState) => {
          console.log("test:", values);
          if (window.confirm("Do you want to create the user ?")) {
            async function addContact() {
              await axiosClient.post("", {
                id: uuidv4,
                name: values.name,
                phone: values.phone,
                email: values.email,
                image: "",
              });
              alert("Create successfully!");
              formState.resetForm();
              navigate(routes.web.dashboard);
            }
            addContact()
          }
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
              Add
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}
