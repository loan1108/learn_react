import React, { useState } from "react";
import { ErrorMessage, Form, Formik, Field } from "formik";
import ErrorField from "./ErrorField";
export default function FormYTe() {
  return (
    <div className="form">
      <h2>Tờ khai y tế</h2>
      <Formik
        initialValues={{
          fullName: "",
          identify: "",
          birthYear: "",
          gender: 0,
          nationality: "",
          company: "",
          department: "",
          haveHealthInsurance: false,
          province: "",
          district: "",
          commune: "",
          village: "",
          phonenumber: "",
          email: "",
          gonePlace: "",
          symptom: "",
          contactWith: "",
        }}
        validate={(values) => {
          const errors = {};
          if (!values.fullName) {
            errors.fullName = "Required";
          }
          if (!values.identify) {
            errors.identify = "Required";
          }
          if (!values.nationality) {
            errors.nationality = "Required";
          }
          if (!values.birthdate) {
            errors.birthdate = "Required";
          } else if (parseInt(values.birthdate) <= 1900) {
            errors.birthdate = "Birthdate must be larger than 1900";
          }
          if(!values.province){
            errors.province ="Required"
          }
          if(!values.district){
            errors.district ="Required"
          }
          if(!values.commune){
            errors.commune ="Required"
          }
          if(!values.village){
            errors.village ="Required"
          }
          if(!values.province){
            errors.province ="Required"
          }
          if(!values.phonenumber){
            errors.phonenumber ="Required"
          }
          if(!values.email){
            errors.email ="Required"
          }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
            errors.email = "Invalid email address"
          }
          return errors;
        }}
        onSubmit={values=>{
          if(values){
            alert("Submit successfully")
          }
          
        }}
      >
        <Form>
          <ErrorField label="Họ và tên" name="fullName" type="text" />
          <br />
          <ErrorField label="Số hộ chiếu/CMND" name="identify" type="number" />
          <br />
          <ErrorField label="Năm sinh" name="birthYear" type="number" />
          <br />
          <ErrorField
            label="Giới tính"
            name="gender"
            values={[
              ["0", "nữ"],
              ["1", "nam"],
            ]}
            type="radio"
          />
          <ErrorField label="Quốc tịch" name="nationality" type="text" />
          <br />
          <ErrorField label="Công ty làm việc" name="company" type="text" />
          <br />
          <ErrorField label="Bộ phận làm việc" name="department" type="text" />
          <br />
          <ErrorField label="Bộ phận làm việc" name="department" type="text" />
          <br />
          <ErrorField
            label="Có thẻ bảo hiểm y tế"
            name="haveHealthInsurance"
            type="checkbox"
          />
          <br />
          <h3>Địa chỉ liên lạc tại Việt Nam</h3>
          <ErrorField label="Tỉnh thành" name="province" type="text" />
          <br />
          <ErrorField label="Quận/ huyện" name="district" type="textt" />
          <br />
          <ErrorField label="Phường/ xã" name="commune" type="text" />
          <br />
          <ErrorField
            label="Số nhà, phố, tổ dân phố/ đội/ thôn"
            name="village"
            type="text"
          />
          <br />
          <ErrorField label="Điện thoại" name="phonenumber" type="number" />
          <br />
          <ErrorField label="Email" name="email" type="text" />
          <br />
          <h3>Thông tin sàng lọc</h3>
          <div>
            <h4>
              Trong vòng 14 ngày qua, Anh/Chị có đến quốc gia/ vùng lãnh thổ
              nào(Có thể đi qua nhiều quốc gia)
            </h4>
            <Field type="text" name="destination" />
          </div>
          <div>
            <h4>
              Trong vòng 14 ngày qua, Anh/Chị có thấy xuất hiện dấu hiệu nào sau
              đây không?
            </h4>
            <div role="group">
              <label>
                <Field type="checkbox" name="symptom" value="Sốt" />
                Sốt
              </label>
              <label>
                <Field type="checkbox" name="symptom" value="Ho" />
                Ho
              </label>
              <label>
                <Field type="checkbox" name="symptom" value="Khó thở" />
                Khó thở
              </label>
              <label>
                <Field type="checkbox" name="symptom" value="Viêm phổi" />
                Viêm phổi
              </label>
              <label>
                <Field type="checkbox" name="symptom" value="Đau họng" />
                Đau họng
              </label>
            </div>
          </div>
          <div>
            <h4>Trong vòng 14 ngày qua, Anh/Chị có tiếp xúc với?</h4>
            <div role="group">
              <label>
                <Field
                  type="checkbox"
                  name="contactWith"
                  value="Người bệnh hoặc nghi ngờ, mắc bệnh COVID-19"
                />
                Người bệnh hoặc nghi ngờ, mắc bệnh COVID-19
              </label>
              <label>
                <Field
                  type="checkbox"
                  name="contactWith"
                  value=" Người từ nước có bệnh COVID-19"
                />
                Người từ nước có bệnh COVID-19
              </label>
              <label>
                <Field
                  type="checkbox"
                  name="contactWith"
                  value="Người có biểu hiện (Sốt, ho, khó thở, viêm phổi)"
                />
                Người có biểu hiện (Sốt, ho, khó thở, viêm phổi)
              </label>
            </div>
          </div>
          <br/>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}
