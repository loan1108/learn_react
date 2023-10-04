import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axiosClient from "../api/axiosClient";
import articleClient from "../api/articleClient";
import { v4 as uuidv4 } from "uuid";
export default function Details() {
  const [user, setUser] = useState({
    name: "",
  });
  const [article, setArticle] = useState({ title: "" });
  const { userId } = useParams();
  const [chooseArticle, setchooseArticle] = useState(null);

  const [articles, setArticles] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const data = await axiosClient.get(`${userId}?_embed=article`);
      console.log(data);
      setUser({ ...user, name: data.name });
      setArticles(data.article);
    }
    fetchData();
  }, []);
  function handleChangeUser(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }
  function handleChangeArticle(e) {
    setArticle({ ...article, [e.target.name]: e.target.value });
  }
  function handleSubmitUser(e) {
    e.preventDefault();
    async function updateUser() {
      await axiosClient.patch(`${userId}`, {
        name: user.name,
      });
      alert("Update successfully! Back to home to see the change");
    }
    if (window.confirm("Do you want update this user name?")) {
      updateUser();
    }
  }
  function handleSubmitArticle(e) {
    e.preventDefault();
    async function addNewArticle() {
      const data = await articleClient.post("", {
        id: uuidv4,
        title: article.title,
        userId: +userId,
      });
      setArticles([...articles, data]);
    }
    addNewArticle();
  }
  function handleEdit(id) {
    if (chooseArticle === null) {
      const index= articles.findIndex(article=> article.id === id)
      setArticle({...article, title: articles[index].title})
      setchooseArticle(id);
    } else {
      setArticle({...article, title:""})
      setchooseArticle(null);
    }
  }
  function handleDelete(id) {
    async function deleteArticle() {
      await articleClient.delete(`${id}`);
      setArticles(articles.filter((article) => article.id !== id));
    }
    deleteArticle();
  }
  return (
    <div style={{ margin: "50px" }}>
      <h1>User Detail</h1>
      <div>
        <form onSubmit={handleSubmitUser}>
          <label htmlFor="name">Name</label>
          <div>
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChangeUser}
            />
            <button className="btn btn-primary" type="submit">
              Update
            </button>
          </div>
        </form>
      </div>
      <div>
        <form onSubmit={handleSubmitArticle}>
          <label htmlFor="title">Article</label>
          <div>
            <input
              type="text"
              name="title"
              value={article.title}
              onChange={handleChangeArticle}
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
