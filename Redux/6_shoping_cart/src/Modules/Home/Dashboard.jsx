import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
import Products from "./Products";
import Header from "../../Components/Header";
import Navbar from "../../Components/Navbar";
import axiosClient from "../../api/axiosClient";
import { useParams } from "react-router-dom";
// import { UseSelector } from "react-redux/es/hooks/useSelector";
export default function Dashboard() {
  const [user, setUser] = useState({
    id: "",
    userName: "",
    password: "",
    phone: "",
    address: "",
  });
  const {userId} = useParams()
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
  }, []);
  return (
    <div style={{ margin: "50px" }}>
      <Header user={user} />
      <Navbar />
      <Products userId={userId} />
      <Pagination />
    </div>
  );
}
