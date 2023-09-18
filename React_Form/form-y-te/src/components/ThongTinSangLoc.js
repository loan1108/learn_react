import React from "react";
import { Formik, Form, Field } from "formik";

export default function ThongTinSangLoc() {
  return (
    <div>
      <Formik
      initialValues={{
        symptom:"",
        contactWith:"",
      }}>
        <Form className="form">
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
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}
