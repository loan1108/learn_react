import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Header from "../../Components/Header";
import axiosClient from "../../api/axiosClient";
import { useParams, Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import routes from "../../routes";
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
  }, []);
  async function fetchProducts() {
    const data = await axiosClient.get("/products");
    setProducts([...data]);
  }
  function handleCategory(e) {
    const category = e.target.getAttribute("category");
    if(category==="all"){
      fetchProducts();
    }else{
      async function fetchVietNamProducts() {
        const data = await axiosClient.get(`/products?category_like=${category}`);
        setProducts([...data]);
      }
      fetchVietNamProducts();
    }
    
  }
  return (
    <div style={{ margin: "50px" }}>
      <Header user={user} />
      <div>
        <ul>
          <li  onClick={handleCategory}>
            <span category="all"> Tất cả</span>
          </li>
        </ul>
        <ul>
          <li onClick={handleCategory}>
            <span category="vietNam"> Văn học Việt Nam</span>
          </li>
        </ul>
        <ul>
          <li onClick={handleCategory}>
            <span category="aboard">Văn học nước ngoài</span>
          </li>
        </ul>
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
