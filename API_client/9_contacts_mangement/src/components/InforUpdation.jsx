import React from "react";
import { Formik } from "formik";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import userSchema from "../userSchema";
import { useParams } from "react-router-dom";
import axiosClient from "../api/axiosClient";
import { useNavigate } from "react-router-dom";
import routes from "../routes";
export default function InforUpdation() {
  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const { userId } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchUser() {
      const data = await axiosClient.get(`${userId}`);
      setUser({
        ...user,
        name: data.name,
        phone: data.phone,
        email: data.email,
      });
      console.log(user);
    }
    fetchUser();
  }, []);
  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    async function updateInfor() {
      await axiosClient.patch(`${userId}`, {
        name:user.name,
        phone:user.phone, 
        email:user.email
      });
      alert("Update successfully!!");
      navigate(routes.web.dashboard);
    }
    if (window.confirm("Do you want to update this information")) {
      updateInfor()
     
    }
  }

  return (
    <div style={{ margin: "20px" }}>
      <h1>Edit contact</h1>
      {/* <Formik
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
      </Formik> */}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <div>
            <label htmlFor="name">Name</label>
          </div>

          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
          />
          {/* {errors.name && <p style={{ color: "red" }}>{errors.name}</p>} */}
        </div>
        <div className="mb-3">
          <div>
            <label htmlFor="email">Email</label>
          </div>

          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={user.email}
          />
          {/* {errors.email && <p style={{ color: "red" }}>{errors.email}</p>} */}
        </div>
        <div className="mb-3">
          <div>
            <label htmlFor="phone">Phone</label>
          </div>

          <input
            type="number"
            name="phone"
            onChange={handleChange}
            value={user.phone}
          />
          {/* {errors.phone && <p style={{ color: "red" }}>{errors.phone}</p>} */}
        </div>
        <button type="submit" className="btn btn-info">
          Save
        </button>
      </form>
    </div>
  );
}
