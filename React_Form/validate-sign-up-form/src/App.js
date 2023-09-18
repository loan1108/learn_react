import React, { useState } from "react";
import "./App.css";

function App() {
  const [form, setForm] = useState({});
  const MESSAGE_ERROR = {
    username: "Username error",
    email: "Email error",
    password: "Password error",
    confirmPassword: "Confirm password error",
  };
  const REGEX = {
    username: /^[a-zA-Z]{2,}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password: /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{6,}$/,
  };
  function handleChange(e) {
    let error = "";
    if (e.target.name === "password") {
      if (form.confirmPassword && form.confirmPassword.value) {
        error =
          e.target.value === form.confirmPassword.value
            ? ""
            : MESSAGE_ERROR[e.target.name];
      } else {
        error = REGEX[e.target.name].test(e.target.value)
          ? ""
          : MESSAGE_ERROR[e.target.name];
      }
    } else if (e.target.name === "confirmPassword") {
      error =
        e.target.value === form.password.value
          ? ""
          : MESSAGE_ERROR[e.target.name];
    } else {
      error = REGEX[e.target.name].test(e.target.value)
        ? ""
        : MESSAGE_ERROR[e.target.name];
    }
    setForm({
      ...form,
      [e.target.name]: { value: e.target.value, error: error },
    });
  }
  function handleSubmit(e) {
    e.preventDefault()
    const isFilled =
      form.username &&
      form.username.value &&
      form.mail &&
      form.mail.value &&
      form.password &&
      form.password.value &&
      form.confirmPassword &&
      form.confirmPassword.value;
    const isError =
      isFilled &&
      (form.username.error ||
        form.mail.error ||
        form.password.error ||
        form.confirmPassword.error);
    alert(
      isFilled && !isError
        ? "Sign up successfully!!!"
        : "Please fill out all of the fields"
    );
  }
  return (
    <div>
      <h1>Sign up</h1>
      <form onSubmit={handleSubmit}>
        <div className={`custom-input ${form.username&&form.username.error&&"custom-input-error"}`}>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={(form.username && form.username.value) || ""}
            onChange={handleChange}
          />
          {form.username && form.username.error && (
            <p className="error">{MESSAGE_ERROR.username}</p>
          )}
        </div>
        <div className={`custom-input ${form.email&&form.email.error&&"custom-input-error"}`}>
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={(form.email && form.email.value) || ""}
            onChange={handleChange}
          />
          {form.email && form.email.error && <p className="error">{MESSAGE_ERROR.email}</p>}
        </div>
        <div className={`custom-input ${form.password&&form.password.error&&"custom-input-error"}`}>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={(form.password && form.password.value) || ""}
            onChange={handleChange}
          />
          {form.password && form.password.error && (
            <p className="error">{MESSAGE_ERROR.password}</p>
          )}
        </div>
        <div className={`custom-input ${form.confirmPassword&&form.confirmPassword.error&&"custom-input-error"}`}>
          <label>Confirm password</label>
          <input
            type="password"
            name="confirmPassword"
            value={(form.confirmPassword && form.confirmPassword.value) || ""}
            onChange={handleChange}
          />
          {form.confirmPassword && form.confirmPassword.error && (
            <p className="error">{MESSAGE_ERROR.confirmPassword}</p>
          )}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
