import React from "react";
import routes from "../../routes";
import { Link } from "react-router-dom";
export default function Header() {
  function handleSubmit(e) {
    e.preventDefault();
  }
  function handleChange(e) {}
  return (
    <div className="header" style={{ marginLeft: "25px" }}>
      <h1>Hiệu sách văn học</h1>
      <div className="d-flex justify-content-between" style={{minWidth:"720px"}}>
        <form
          style={{ margin: "auto", display: "inline-block" }}
          onSubmit={handleSubmit}
        >
          <input
            type="search"
            className="form-control"
            placeholder="Tìm kiếm sách hay"
            name="item"
            style={{
              width: "500px",
              display: "inline-block",
              marginRight: "20px",
            }}
            onChange={handleChange}
          />
          <button type="submit" className="btn btn-outline-success">
            Tìm kiếm
          </button>
        </form>
        <div>
          <Link
            to={routes.web.cart}
            className="btn btn-success"
            style={{ float: "right" }}
          >
            <i className="bi bi-cart ">Giỏ hàng</i>
          </Link>
        </div>
      </div>
    </div>
  );
}
