import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axiosClient from "../api/axiosClient";
import articleClient from "../api/articleClient";
import { v4 as uuidv4 } from "uuid";
import { Formik } from "formik";
import routes from "../routes";
import { Link } from "react-router-dom";
import Loading from "./loading";
export default function Details() {
  const [user, setUser] = useState({
    name: "",
  });
  const[loading, setLoading] = useState(false)
  const [article, setArticle] = useState({ title: "" });
  const { userId } = useParams();
  const [chooseArticle, setchooseArticle] = useState(null);
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    
    async function fetchData() {
      setLoading(true)
      const data = await axiosClient.get(`${userId}?_embed=article`);
      setLoading(false)
      setUser({ ...user, name: data.name });
      setArticles(data.article);
    }
    fetchData();
  }, []);
  function handleEdit(id) {
    if (chooseArticle !== id) {
      const index = articles.findIndex((article) => article.id === id);
      setArticle({ ...article, title: articles[index].title });
      setchooseArticle(id);
    } else {
      setchooseArticle(null);
      setArticle({ ...article, title: "" });
    }
  }
  function handleDelete(id) {
    async function deleteArticle() {
      setLoading(true)
      await articleClient.delete(`${id}`);
      setLoading(false)
      setArticles(articles.filter((article) => article.id !== id));
    }
    deleteArticle();
  }
  if(loading){return <Loading/> }
  return (
    <div style={{ margin: "50px" }}>
      <div className="d-flex justify-content-between">
        <h1>User Detail</h1>
        <p>
          <Link to={routes.web.dashboard} className="btn btn-secondary">
            Back to home
          </Link>
        </p>
      </div>

      <div>
        <Formik
          initialValues={user}
          enableReinitialize
          onSubmit={(values) => {
            async function updateUser() {
              setLoading(true)
              await axiosClient.patch(`${userId}`, {
                name: values.name,
              });
              setLoading(false)
              alert("Update successfully! Back to home to see the change");
            }
            if (window.confirm("Do you want update this user name?")) {
              updateUser();
            }
          }}
        >
          {({ values, errors, handleChange, handleBlur, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Name</label>
              <div>
                <input
                  type="text"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <button className="btn btn-primary" type="submit">
                  Update
                </button>
                {errors && <p style={{ color: "red" }}>{errors.name}</p>}
              </div>
            </form>
          )}
        </Formik>
      </div>
      <div>
        <Formik
          initialValues={article}
          enableReinitialize
          onSubmit={(values) => {
            if (chooseArticle === null) {
              async function addNewArticle() {
                setLoading(true)
                const data = await articleClient.post("", {
                  id: uuidv4,
                  title: values.title,
                  userId: +userId,
                });
                setLoading(false)
                setArticles([...articles, data]);
              }
              addNewArticle();
            } else {
              async function updateArticle() {
                setLoading(true)
                const data = await articleClient.patch(`${chooseArticle}`, {
                  title: values.title,
                });
                setLoading(false)
                const newArticles = [...articles];
                const index = newArticles.findIndex(
                  (article) => article.id === data.id
                );
                newArticles[index].title = data.title;
                setArticles(newArticles);
              }
              updateArticle();
            }
          }}
        >
          {({ values, handleBlur, handleChange, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <label htmlFor="title">Article</label>
              <div>
                <input
                  type="text"
                  name="title"
                  value={values.title}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {chooseArticle === null ? (
                  <>
                    <button className="btn btn-primary" type="submit">
                      Add
                    </button>
                  </>
                ) : (
                  <>
                    <button className="btn btn-primary" type="submit">
                      Update
                    </button>
                    <button className="btn btn-warning" type="button">
                      Cancel
                    </button>
                  </>
                )}
              </div>
            </form>
          )}
        </Formik>
      </div>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Articles</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {articles &&
              articles.map((article) => (
                <tr key={article.id}>
                  <td>{article.title}</td>
                  <td className="btn-group" role="group">
                    <button
                      className={`btn btn-${
                        chooseArticle === article.id ? "secondary" : "info"
                      }`}
                      type="button"
                      onClick={() => handleEdit(article.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger"
                      type="button"
                      onClick={() => handleDelete(article.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
