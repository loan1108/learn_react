import React, { useState } from "react";
import "./App.css";
import { Formik, Form } from "formik";
export default function App() {
  const [form, setForm] = useState({});
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleValidate() {
    const errors = {};
    if (!form.name) {
      errors.name = "Required";
    }
    if (!form.email) {
      errors.email = "Required";
    } else if (!/[a-zA-Z0-9+_]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9]/.test(form.email)) {
      errors.email = "Invalid email address";
    }
    if (!form.phone) {
      errors.phone = "Required";
    }
    if (!form.message) {
      errors.message = "Required";
    }
    return errors;
  }
  return (
    <Formik
      initialValues={form}
      validate={handleValidate}
      onSubmit={(values)=>{
        console.log("acd")
        if(values){
          alert("Submit Successfully")
        }
      }}
    >
      {({ errors }) => (
        <Form >
          <h1>Contact form</h1>
          <div>
            <label htmlFor="name">Name</label>
            <br />
            <input
              type="text"
              name="name"
              value={form.name || ""}
              onChange={handleChange}
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="text"
              name="email"
              value={form.email || ""}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="phone">Phone</label>
            <br />
            <input
              type="number"
              name="phone"
              value={form.phone || ""}
              onChange={handleChange}
            />
            {errors.phone && <p className="error">{errors.phone}</p>}
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <br />
            <textarea
              type="text"
              name="message"
              value={form.message || ""}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
}
