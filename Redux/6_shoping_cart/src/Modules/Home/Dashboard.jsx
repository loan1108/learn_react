import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
import Products from "./Products";
import Header from "../../Components/Header";
import Navbar from "../../Components/Navbar";
import axiosClient from "../../api/axiosClient";
export default function Dashboard() {
  const [user, setUser] = useState({
    id: "",
    userName: "",
    password: "",
    phone: "",
    address: "",
  });
  useEffect(() => {
    async function fetchUser() {
      const data = await axiosClient.get("/users/1");
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
  }, [user]);
  return (
    <div style={{ margin: "50px" }}>
      <Header user={user} />
      <Navbar />
      <Products user={user} />
      <Pagination />
    </div>
  );
}
