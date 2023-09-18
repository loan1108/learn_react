import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

export default function App() {
  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          if (!values.password) {
            errors.password = "Required";
          }
          return errors;
        }}
        onSubmit={(values) => {
          if (values) {
            alert("Login successfully");
          }
        }}
      >
        {({ errors }) => (
          <Form>
            <div
              className={`custom-input ${
                errors.email ? "custom-input-error" : ""
              }`}
            >
              <label htmlFor="email">Email</label>
              <Field type="text" name="email" />
              <ErrorMessage name="email" component="div" />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="div" />
            </div>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
