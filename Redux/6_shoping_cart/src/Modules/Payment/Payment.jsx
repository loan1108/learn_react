import React, { useEffect, useState } from "react";
import Header from "../../Components/Header";
import { Formik } from "formik";
import axiosClient from "../../api/axiosClient";
import { useParams } from "react-router-dom";
import userSchema from "../../validateSchema/userSchema"
import { useNavigate } from "react-router-dom";
import routes from "../../routes";
import { v4 as uuidv4 } from "uuid";
export default function Payment() {
  const [receiver, setReceiver] = useState({
    name: "",
    phone: "",
    address: "",
    payment: "Tiền mặt",
    boughtProducts: [],
  });
  const loginUser = JSON.parse(window.localStorage.getItem("loginUser"))
  const navigate = useNavigate();
  const { userId } = useParams();
  useEffect(() => {
    async function fetchUser() {
      const data = await axiosClient.get(
        `/users/${userId}?_embed=cartProducts`
      );
      setReceiver({
        ...receiver,
        name: data.userName,
        phone: data.phone,
        address: data.address,
        boughtProducts: data.cartProducts,
      });
    }
    fetchUser();
  }, [userId]);
  return (
    <div style={{ margin: "50px" }}>
      <Header user={loginUser}/>
      <div>
        <h2>Thông tin người nhận</h2>
        <Formik
          initialValues={receiver}
          enableReinitialize
          validationSchema={userSchema}
          onSubmit={() => {
            alert("Đơn hàng đã được xác nhận");
            async function addReceiver() {
              await axiosClient.post(`/receivers`, {
                id: uuidv4(),
                userId: userId,
                boughtTime: new Date().toUTCString(),
                ...receiver,
              });
            }
            addReceiver();
            const newReceiver = { ...receiver };
            newReceiver.boughtProducts.map((product) => {
              axiosClient.delete(`/cartProducts/${product.id}`);
              axiosClient.patch(`/products/${product.productId}`, {
                inventory: product.productInventory - product.quantity,
              });
            });
            navigate(`${routes.web.history}/${userId}`);
          }}
        >
          {({ values, errors, handleSubmit, handleChange, handleBlur }) => (
            <form onSubmit={handleSubmit}>
              <div>
                <p>
                  <label htmlFor="name">Họ tên người nhận</label>
                </p>
                <p>
                  <input
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </p>
                {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
              </div>
              <div>
                <p>
                  <label htmlFor="phone">Số điện thoại người nhận</label>
                </p>
                <p>
                  <input
                    name="phone"
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </p>

                {errors.phone && <p style={{ color: "red" }}>{errors.phone}</p>}
              </div>
              <div>
                <p>
                  <label htmlFor="address">Địa chỉ người nhận</label>
                </p>
                <p>
                  <input
                    name="address"
                    value={values.address}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </p>
                {errors.address && (
                  <p style={{ color: "red" }}>{errors.address}</p>
                )}
              </div>
              <div>
                <p>
                  <label htmlFor="payment">Phương thức thanh toán</label>
                </p>
                <input
                  disabled
                  name="payment"
                  value={values.payment}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <div style={{ marginTop: "20px" }}>
                <button className="btn btn-primary" type="submit">
                  Xác nhận
                </button>
              </div>
              <br />
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}
