import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Header from "../Components/Header";
import axiosClient from "../api/axiosClient";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import routes from "../routes";
export default function Dashboard() {
  const [user, setUser] = useState({
    id: "",
    userName: "",
    password: "",
    phone: "",
    address: "",
  });
  const [products, setProducts] = useState([]);
  const { userId } = useParams();
  const[searchProduct, setSearchProduct] = useState({item:""})
  useEffect(() => {
    async function fetchUser() {
      const data = await axiosClient.get(`/users/${userId}`);
      setUser({
        ...user,
        id: data.id,
        userName: data.userName,
        password: data.password,
        phone: data.phone,
        address: data.address,
      });
    }
    fetchUser();
    fetchProducts();
  }, [userId]);
  async function fetchProducts() {
    const data = await axiosClient.get("/products");
    setProducts([...data]);
  }
  function handleCategory(e) {
    console.log(e.target);
    const category = e.target.getAttribute("category");
    if (category === "all") {
      fetchProducts();
    } else {
      async function fetchVietNamProducts() {
        const data = await axiosClient.get(
          `/products?category_like=${category}`
        );
        setProducts([...data]);
      }
      fetchVietNamProducts();
    }
  }
  function handleChange(e){
    setSearchProduct({...setProducts, [e.target.name]:e.target.value})

  }
  function handleSubmit(e){
    e.preventDefault();
    async function fetchSearchProducts() {
      const data = await axiosClient.get(
        `/products?q=${searchProduct.item}`
      );
      setProducts([...data]);
    }
    fetchSearchProducts()
  }
  return (
    <div style={{ margin: "50px" }}>
      <Header user={user} />
      <div className="navbar navbar-expand-lg navbar-light bg-light" >
        <ul className="d-flex justify-content-start" style={{ listStyleType: "none" }}>
          <li className="nav-item"category="all" onClick={handleCategory}>
            Tất cả
          </li>
          <li className="nav-item" category="vietNam" onClick={handleCategory}>
            Văn học Việt Nam
          </li>
          <li className="nav-item" category="aboard" onClick={handleCategory}>
            Văn học nước ngoài
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0 " onSubmit={handleSubmit}>
          <input
            className="form-control mr-sm-2"
            name="item"
            value={searchProduct.item}
            type="search"
            placeholder="Search"
            aria-label="Search"
            style={{
              width: "500px",
              display: "inline-block",
              marginRight: "20px",
            }}
            onChange={handleChange}
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
      <div className="grid-container">
        {products &&
          products.map((product) => (
            <div className="grid-item" key={product.id}>
              <div className="card" style={{ width: "18rem", height: "26rem" }}>
                <img
                  className="card-img-top"
                  style={{ height: "15rem" }}
                  src={product.image}
                  alt="Card cap"
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
