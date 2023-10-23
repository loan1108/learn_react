import React from "react";
import { useDispatch, useSelector } from "react-redux";
import actionTypes from "../../redux/actionTypes";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import routes from "../../routes";
import "bootstrap/dist/css/bootstrap.css";

export default function Products() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productsReducer);
  const page = useSelector(state => state.choosenPageReducer.initialPage)
  const loadProducts = () => dispatch({ type: actionTypes.LOAD_PRODUCTS, payload:{page} });
  useEffect(() => {
    loadProducts();
  }, []);
  

  return (
    <div>
      <div className="grid-container">
        {products &&
          products.map((product) => (
            <div className="grid-item" key={product.id}>
              <div className="card" style={{ width: "18rem", height: "26rem" }}>
                <img
                  className="card-img-top"
                  style={{ height: "15rem" }}
                  src={product.image}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p>{product.price.toLocaleString()} VNĐ</p>
                </div>
                <Link
                  to={`${routes.web.detail}/${product.id}`}
                  className="btn btn-primary"
                >
                  Xem sản phẩm
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
