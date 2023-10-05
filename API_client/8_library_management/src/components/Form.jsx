import React from "react";
import { Formik } from "formik";
import userSchema from "../userSchema";
import routes from "../routes";
import { Link } from "react-router-dom";
export default function Form(props) {
  const isCreateBook = props.isCreateBook;
  return (
    <div style={{ margin: "20px" }}>
      <div className="d-flex justify-content-between">
        <h1>{props.pageTitle}</h1>
        <p>
          <Link
            to={routes.web.dashboard}
            type="button"
            className="btn btn-secondary"
          >
            {" "}
            Back to Home
          </Link>
        </p>
      </div>

      <Formik
        initialValues={props.book}
        enableReinitialize
        validationSchema={userSchema}
        onSubmit={(values, formState) => {
          if (isCreateBook) {
            props.handleCreateBook(values);
            // formState.resetForm();
          } else {
            props.handleEditBook(values);
          }
        }}
      >
        {({ values, errors, handleChange, handleSubmit, handleBlur }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <div className="mb-3">
                <label htmlFor="title">Title</label>
              </div>
              <div>
                <input
                  type="text"
                  name="title"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.title}
                />
                {errors.title && <p style={{ color: "red" }}>{errors.title}</p>}
              </div>
            </div>
            <div className="mb-3">
              <div className="mb-3">
                <label htmlFor="quantity">Quantity</label>
              </div>
              <div>
                <input
                  type="number"
                  name="quantity"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.quantity}
                />
                {errors.quantity && (
                  <p style={{ color: "red" }}>{errors.quantity}</p>
                )}
              </div>
            </div>
            <button type="submit" className="btn btn-info">
              {props.btnName}
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}
