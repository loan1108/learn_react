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
  console.log(page)
  const loadProducts = () => dispatch({ type: actionTypes.LOAD_PRODUCTS, payload:{page} });
  
  // const [products, setProducts] = useState(null)
  useEffect(() => {
    loadProducts();
    // async function getAllProducts(){
    //   const res = await axiosClient.get("http://localhost:3001/products"); 
    //   console.log(res); 
    //   setProducts(res);
    // }
    // getAllProducts()
  }, []);
  

  return (
    <div>
      {/* <h1>Products</h1>
      <div>
        <table classNameName="table">
          
          <tbody>
            {products &&
              products.map((product) => (
                <tr key={product.id}>
                  <td>{product.title}</td>
                  <td>{product.price}</td>
                  <td>{product.inventory}</td>
                  <td>
                    <button
                      classNameName="btn btn-info"
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
      </div> */}
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
