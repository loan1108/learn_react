import React, { useState } from "react";
import routes from "../routes";
import { Link } from "react-router-dom";
import "bootstrap/js/dist/dropdown.js"
export default function Header(props) {
  return (
    <div
      className="header d-flex justify-content-between"
      style={{ margin: "25px" }}
    >
      <h1>
        <Link to={routes.web.home} style={{ textDecoration: "none", color:"black"}}>
          HIỆU SÁCH VĂN HỌC
        </Link>
      </h1>
      <div className="d-flex justify-content-between">
        <div class="dropdown ">
          <p
            class="btn btn-info dropdown-toggle"
            href="#"
            role="button"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Welcome {props.user.userName}
          </p>

          <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <Link
            to={`${routes.web.history}/${props.user.id}`}
            className="dropdown-item"
            style={{ textDecoration: "none", color: "black" }}
          >
            Lịch sử mua hàng
          </Link>
          </div>
        </div>
        <div>
          <Link
            to={routes.web.cart}
            className="btn btn-danger"
            style={{ float: "right" }}
          >
            <i className="bi bi-cart ">Giỏ hàng</i>
          </Link>
        </div>
      </div>
    </div>
  );
}
