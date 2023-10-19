import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import actionTypes from "../redux/actionTypes";
import axiosClient from "../api/axiosClient";
export default function YourCart() {
  const [cartProducts, setCartProducts] = useState([]);
  const products = useSelector((state) => state.productsReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchCartProducts() {
      const data = await axiosClient.get("/cartProducts?_expand=product");
      setCartProducts([...data]);
    }
    fetchCartProducts();
  }, []);
  let total = 0;
  cartProducts &&
    cartProducts.forEach((cartProduct) => {
      total += cartProduct.product.price * cartProduct.quantity;
    });
  function increaseQuantity(cartProduct) {
    const index = cartProducts.findIndex(
      (product) => product.id === cartProduct.id
    );
    if (cartProduct.quantity < cartProduct.product.inventory) {
      [...cartProducts][index].quantity = cartProduct.quantity + 1;
      setCartProducts([...cartProducts]);
    }
  }
  function decreaseQuantity(cartProduct) {
    const index = cartProducts.findIndex(
      (product) => product.id === cartProduct.id
    );
    if (cartProduct.quantity > 0) {
      [...cartProducts][index].quantity = cartProduct.quantity - 1;
      setCartProducts([...cartProducts]);
    }
  }
  function handleDeleteCartProduct(cartProduct){
    const newCartsProduct = cartProducts.filter(product=>product.id!== cartProduct.id)
    setCartProducts([...newCartsProduct])
    async function deleteCartProduct(){
      await axiosClient.delete(`/cartProducts/${cartProduct.id}`)
    }
    deleteCartProduct()
  }
  return (
    <div style={{margin:"50px"}}>
      <h1>Giỏ hàng của bạn</h1>
      {total === 0 ? (
        <p>Hãy thêm sản phẩm vào giỏ hàng của bạn</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Sản phẩm</th>
              <th scope="col">Giá</th>
              <th scope="col">Số lượng còn lại</th>
              <th scope="col">Số lượng</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {cartProducts &&
              cartProducts.map((cartProduct) => (
                <tr key={cartProduct.id}>
                  <td>{cartProduct.product.title}</td>
                  <td>{`${cartProduct.product.price.toLocaleString()} VNĐ`}</td>
                  <td>{cartProduct.product.inventory}</td>
                  <td>
                    <div
                      className="btn-group"
                      role="group"
                      aria-label="Basic outlined example"
                    >
                      <button
                        type="button"
                        className={`btn btn-outline-${
                          cartProduct.quantity !== cartProduct.product.inventory
                            ? "primary"
                            : "secondary"
                        }`}
                        disabled={
                          cartProduct.quantity === cartProduct.product.inventory
                            ? "disable"
                            : ""
                        }
                        onClick={() => increaseQuantity(cartProduct)}
                      >
                        <i className="bi bi-plus"></i>
                      </button>
                      <input
                        type="button"
                        value={cartProduct.quantity}
                        min="0"
                        style={{
                          backgroundColor: "white",
                          color: "black",
                          border: "none",
                        }}
                      />
                      <button
                        type="button"
                        className={`btn btn-outline-${
                          cartProduct.quantity !== 0 ? "primary" : "secondary"
                        }`}
                        onClick={() => decreaseQuantity(cartProduct)}
                      >
                        <i className="bi bi-dash-lg"></i>
                      </button>
                    </div>
                  </td>
                  <td>
                    <span onClick={()=>handleDeleteCartProduct(cartProduct)} style={{cursor:"pointer"}}>
                      <i
                        style={{ fontSize: "25px" }}
                        className="bi bi-trash-fill"
                      ></i>
                    </span>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
      <p>Tổng: {`${total.toLocaleString()} VNĐ`}</p>
      <button
      className="btn btn-primary"
        type="button"
        disabled={total === 0 ? "disabled" : ""}
        onClick={() =>
          dispatch({
            type: actionTypes.CHECK_OUT_REQUEST,
            payload: { products, cartProducts },
          })
        }
      >
        Thanh toán
      </button>
    </div>
  );
}
