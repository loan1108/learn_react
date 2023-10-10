import React from "react";
import { useDispatch, useSelector } from "react-redux";
import actionType from "../redux/actionTypes";
import { useEffect } from "react";

export default function Products() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productsReducer);
  const loadUsers = () => dispatch({ type: actionType.LOAD_PRODUCTS });
  useEffect(() => {
    loadUsers();
  }, []);
  return (
    <>
      <h1>Products</h1>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Product name</th>
              <th scope="col">Price</th>
              <th scope="col">Inventory</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {products &&
              products.map((product) => (
                <tr key={product.id}>
                  <td>{product.title}</td>
                  <td>{product.price}</td>
                  <td>{product.inventory}</td>
                  <td>
                    <button
                      className="btn btn-info"
                      type="button"
                      disabled={product.inventory > 0 ? "" : "disabled"}
                      onClick={() =>
                        dispatch({
                          type: actionType.ADD_TO_CART,
                          payload: product,
                        })
                      }
                    >
                      {product.inventory > 0 ? "Add to card" : "Sold out"}
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
