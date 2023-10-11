import React from "react";
import { useSelector, useDispatch } from "react-redux";
import actionTypes from "../redux/actionTypes";
export default function YourCart(props) {
  const cartProducts = useSelector((state) => state.cartReducer);
  const products = useSelector((state) => state.productsReducer);
  const dispatch = useDispatch();
  let total = 0;
  cartProducts &&
    cartProducts.forEach((product) => {
      total += product.price * product.inventory;
    });
  return (
    <>
      <h1>Your Cart</h1>
      {total === 0 ? (
        <p>Please add some products to cart</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Product name</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
            </tr>
          </thead>
          <tbody>
            {cartProducts &&
              cartProducts.map((product) => (
                <tr key={product.id}>
                  <td>{product.title}</td>
                  <td>{product.price}</td>
                  <td>{product.inventory}</td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
      <p>Total: {total}</p>
      <button
        type="button"
        disabled={total===0?"disabled":""}
        onClick={() =>
          dispatch({
            type: actionTypes.CHECK_OUT_REQUEST,
            payload: { products, cartProducts },
          })
        }
      >
        Checkout
      </button>
    </>
  );
}
