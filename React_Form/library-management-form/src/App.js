import React, { useState } from "react";
import "./App.css";
import { Formik, Form, Field } from "formik";
import "bootstrap/dist/css/bootstrap.min.css";
import { v4 as uuidv4 } from "uuid";
export default function App() {
  const [data, setData] = useState([
    { id: 1, title: "book1", number: 1 },
    { id: 2, title: "book2", number: 2 },
    { id: 3, title: "book3", number: 3 },
  ]);
  const [form, setForm] = useState({});
  const [chooseBook, setChooseBook] = useState(null)
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    // e.preventDefault();
    const newData = [...data];
    if(chooseBook ===null){
      
      newData.unshift({
        id: uuidv4(),
        title: form.title,
        number: form.number,
      });
      setData(newData);
    }else{
      const index = data.findIndex(book=>book.id ===chooseBook);
      newData[index].title = form.title;
      newData[index].number = form.number;
      setData(newData)
      setForm({...form, title:"", number:""})
      setChooseBook(null)
    }
    
  }
  function handleValidate() {
    const errors = {};
    if (!form.title) {
      errors.title = "Required";
    }
    if (!form.number) {
      errors.number = "Required";
    }
    console.log("abc");
    return errors;
  }
  function editBook(book) {
    if(chooseBook === null){
      setChooseBook(book.id)
      setForm({ ...form, title: book.title, number: book.number });
    }else{
      setForm({...form, title:"",number:""})
      setChooseBook(null)
    }
   
  }
  function deleteBook(id) {
    const newData = data.filter((book) => book.id !== id);
    setData(newData);
  }
  return (
    <>
      <h1>Library</h1>
      <Formik
        initialValues={form}
        validate={handleValidate}
        onSubmit={handleSubmit}
      >
        {({ errors, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="title">Tiêu đề</label>
              <br />
              <input
                type="text"
                name="title"
                value={form.title || ""}
                onChange={handleChange}
              />
              {errors&&errors.title &&(
                <p className="error">{errors.title}</p>
              )}
            </div>
            <div>
              <label htmlFor="number">Số lượng</label>
              <br />
              <input
                type="text"
                name="number"
                value={form.number || ""}
                onChange={handleChange}
              />
              {errors&&errors.number &&(
                <p className="error">{errors.number}</p>
              )}
            </div>
            <br />
            <button type="submit" className="btn btn-info" >
              {chooseBook===null?"Submit":"Update"}
            </button>
          </form>
        )}
      </Formik>
      <br />
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Number</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((book) => (
              <>
                <tr>
                  <td>{book.title}</td>
                  <td>{book.number}</td>
                  <td>
                    <button
                      type="button"
                      className={`btn btn-${chooseBook===book.id?"secondary":"warning"}`}
                      onClick={() => editBook(book)}
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className=" btn btn-danger"
                      onClick={() => deleteBook(book.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </>
            ))}
        </tbody>
      </table>
    </>
  );
}
