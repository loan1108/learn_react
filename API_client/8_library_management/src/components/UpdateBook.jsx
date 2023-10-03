import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Formik } from "formik";
import userSchema from "../userSchema";
import axiosClient from "../api/axiosClient";
export default function UpdateBook() {
  const { bookId } = useParams();
  const [book, setBook] = useState({
    id: "",
    title: "",
    quantity: "",
  });
  useEffect(() => {
    console.log(book)
    async function fetchBook() {
      const data = await axiosClient.get(`${bookId}`)
      console.log(data)
      setBook({...book, id:data.id, title:data.title, quantity:data.quantity})
      console.log(book)
    }
    fetchBook();
  }, []);
  return (
    <div>
      <h1>Add a new Book</h1>
      <Formik
        initialValues={book}
        validationSchema={userSchema}
        onSubmit={(values, formState) => {
          console.log(values);
        }}
      >
        {({ values, errors, handleChange, handleSubmit, handleBlur }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="title">Title</label>
              <input
                type="text"
                name="title"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
              />
              {errors.title && <p style={{ color: "red" }}>{errors.title}</p>}
            </div>
            <div>
              <label htmlFor="quantity">Quantity</label>
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
            <button type="submit" className="btn btn-info">
              Update
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}
