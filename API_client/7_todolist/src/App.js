import React, { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

export default function App() {
  const [list, setList] = useState([]);
  const [item, setItem] = useState({ title: "" });
  useEffect(() => {
    async function fetchList() {
      const data = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      console.log(data); //
      setList([data.data[0], ...list]);
    }
    fetchList();
  }, []);
  function handleChange(e) {
    setItem({ ...item, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    const newItem = {
      userId: 1,
      id: uuidv4(),
      title: item.title,
      completed: false,
    };
    async function addItem() {
      await axios.post("https://jsonplaceholder.typicode.com/todos", {
        newItem,
      });
    }
    addItem();
    setList([newItem, ...list]);
  }
  return (
    <div>
      <h1>To do list</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="name"
          name="title"
          value={item.title}
          onChange={handleChange}
        />
        <button type="submit">Create</button>
      </form>
      <div>{list && list.map((item) => <p>{item.title}</p>)}</div>
    </div>
  );
}
