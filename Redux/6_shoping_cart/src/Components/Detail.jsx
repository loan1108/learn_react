import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axiosClient from "../api/axiosClient";
import Header from "./Home/Header";
import { useDispatch } from "react-redux";
import actionTypes from "../redux/actionTypes";
import { useNavigate } from "react-router-dom";
import routes from "../routes";
export default function Detail() {
  const dispatch = useDispatch();
  // const products = useSelector(state=>state.productsReducer);
  const navigate = useNavigate()
  const { productId } = useParams();
  const [product, setProduct] = useState({
    id: 1,
    image: "",
    title: "",
    author: "",
    price: 0,
    inventory: 0,
    quantity: 0,
    star: 0,
    category: "",
  });
  async function fetchProduct() {
    const data = await axiosClient.get(`/products/${productId}`);
    setProduct(data);
  }
  useEffect(() => {
    fetchProduct();
  }, [productId]);
  function increaseQuantity() {
    if (product.quantity < product.inventory) {
      setProduct({ ...product, quantity: product.quantity + 1 });
    }
  }
  function decreaseQuantity() {
    if (product.quantity > 0) {
      setProduct({ ...product, quantity: product.quantity - 1 });
    }
  }
  return (
    <div style={{ margin: "50px" }}>
      <Header />
      <div className="container" style={{ height: "100px", marginTop: "50px" }}>
        <div className="row">
          <div className="col">
            <img
              src={product.image}
              alt="product"
              width="500px"
              height="500px"
            />
          </div>
          <div className="col">
            <div>
              <h3>{product.title}</h3>
              <h5>{`Tác giả: ${product.author}`}</h5>
            </div>
            <div>
              <p
                style={
                  product.quantity === product.inventory
                    ? { color: "red" }
                    : { color: "black" }
                }
              >{`Số lượng còn lại: ${product.inventory}`}</p>
              <p
                style={{ color: "#C92127", fontSize: "32px" }}
              >{`Giá: ${product.price.toLocaleString()} VNĐ`}</p>
            </div>
            <div
              className="btn-group"
              role="group"
              aria-label="Basic outlined example"
            >
              <button
                type="button"
                className="btn btn-outline-primary"
                onClick={() => increaseQuantity()}
              >
                <i className="bi bi-plus"></i>
              </button>
              <input
                type="button"
                value={product.quantity}
                min="0"
                style={{
                  backgroundColor: "white",
                  color: "black",
                  border: "none",
                }}
              />
              <button
                type="button"
                className="btn btn-outline-primary"
                onClick={() => decreaseQuantity()}
              >
                <i className="bi bi-dash-lg"></i>
              </button>
            </div>
            <div style={{ marginTop: "30px" }}>
              <button
                type="button"
                className="btn btn-primary"
                disabled={product.quantity === 0 ? "disabled" : ""}
                onClick={() =>
                  {navigate(routes.web.cart);
                  dispatch({ type: actionTypes.ADD_TO_CART_REQUEST, payload: product })}
                }
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
