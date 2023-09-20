import React from "react";
import "./App.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
export default function App() {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        phone: "",
        message: "",
      }}
      validate={(values) => {
        const errors = {};
        if (!values.name) {
          errors.name = "Required";
        }
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        if (!values.phone) {
          errors.phone = "Required";
        }
        return errors;
      }}
      onSubmit={(values) => {
        if (values) {
          alert("Submit successfully!!");
        }
      }}
    >
      {({ errors }) => (
        <Form>
          <div className={`custom-input ${errors.name?"custom-input-error":""}`}>
            <label className="label" htmlFor="name">
              Name
            </label>
            <br />
            <Field className="custom-input" type="text" name="name" />
            <ErrorMessage className="error" name="name" component="div" />
          </div>
          <div className={`custom-input ${errors.name?"custom-input-error":""}`}>
            <label className="label" htmlFor="email">
              Email
            </label>
            <br />
            <Field className="custom-input" type="text" name="email" />
            <ErrorMessage className="error" name="email" component="div" />
          </div>
          <div className={`custom-input ${errors.name?"custom-input-error":""}`}>
            <label className="label" htmlFor="phone">
              Phone
            </label>
            <br />
            <Field className="custom-input" type="number" name="phone" />
            <ErrorMessage className="error" name="phone" component="div" />
          </div>
          <div>
            <label className="label" htmlFor="message">
              Message
            </label>
            <br />
            <Field className="custom-input" type="textarea" name="message" />
            <ErrorMessage className="error" name="message" component="div" />
          </div>
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
}
