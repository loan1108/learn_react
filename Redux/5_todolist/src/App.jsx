import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import actionTypes from "./redux/actionTypes";
import { v4 as uuidv4 } from "uuid";
import 'bootstrap/dist/css/bootstrap.css';
export default function App() {
  const dispatch = useDispatch();
  const [text, setText] = useState({ newTask: "" });
  const listReducer = useSelector((state) => state.listReducer);
  function handleSubmit(e) {
    e.preventDefault();
    dispatch({
      type: actionTypes.ADDNEWTASK,
      payload: {
        id: uuidv4(),
        name: text.newTask,
      },
    });
  }
  function handleChange(e) {
    setText({ ...text, [e.target.name]: e.target.value });
  }
  return (
    <div style={{margin:"40px"}}>
      <form onSubmit={handleSubmit}>
        <p>
          <label htmlFor="newTask">TO DO LIST</label>
        </p>
        <input
          style={{width:"300px"}}
          type="text"
          name="newTask"
          value={text.newTask}
          placeholder="Enter a new task"
          onChange={handleChange}
        />
        <button className="btn btn-primary "type="submit">Add</button>
      </form>
      <hr/>
      <div>
        {listReducer &&
          listReducer.map((task) => (
            <div key={task.id}>
              <p>{task.name}</p>
              <button
                className="btn btn-danger"
                type="button"
                onClick={() =>
                  dispatch({
                    type: actionTypes.REMOVETASK,
                    payload: { id: task.id, name: task.name },
                  })
                }
              >
                Remove
              </button>
              <hr/>
            </div>
          ))}
      </div>
    </div>
  );
}
