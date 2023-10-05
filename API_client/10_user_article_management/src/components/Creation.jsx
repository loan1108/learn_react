import React, { useState } from "react";
import axiosClient from "../api/axiosClient";
import { Link } from "react-router-dom";
import routes from "../routes";
import { v4 as uuidv4 } from "uuid";
import Loading from "./loading";
import { Formik } from "formik";
export default function Creation() {
  const [user, setUser] = useState({
    name: "",
  });
  const [loading, setLoading] = useState(false);
  if (loading) {
    return <Loading />;
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
      <Formik
        initialValues={user}
        enableReinitialize
        onSubmit={(values, formSate) => {
          
          async function createUser() {
            setLoading(true)
            await axiosClient.post("", {
              id: uuidv4,
              name: values.name,
            });
            alert("Create successfully!!");
            setLoading(false)
          }
          if (window.confirm("Do you want to create this user?")) {
            createUser();
            formSate.resetForm()
          }
        }}
      >
        {({ values, errors, handleSubmit, handleChange, handleBlur }) => (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <div className="mb-3">
                <label htmlFor="name">Name</label>
              </div>

              <input
                name="name"
                value={values.name}
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <button type="submit" className="btn btn-success ml-2">
                Add
              </button>
              {errors.name && <p style={{ color: "red" }}>Fill the name field</p>}
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}
