import React,{useState} from 'react'
import { ErrorMessage, Form, Formik, Field } from "formik";
export default function FormYTe() {
    const [form, setForm] = useState({})
    function handleChange(e){
        setForm({...form, [e.target.name]: e.target.value})
    }
    return (
        <div className="form">
          <h2>Tờ khai y tế</h2>
          <Formik
            initialValues={{
              fullName: "",
              identify: "",
              birthdate: "",
              gender: "",
              nationality: "",
              company: "",
              department: "",
              haveHealthInsurance: false,
            }}
            validate={values=>{
              const errors={};
              if(!values.fullName){
                errors.fullName ="Required";
              }
              if(!values.identify){
                errors.identify ="Required";
              }
              if(!values.nationality){
                errors.nationality ="Required";
              }
              if(!values.birthdate){
                errors.birthdate ="Required";
              }else if(parseInt(values.birthdate)<=1900){
                errors.birthdate="Birthdate must be larger than 1900"
              }
              return errors;
            }}
          >
            <Form>
              <div>
                <h4>Họ và tên</h4>
                <Field type="text" name="fullName" value={form.fullName ||""}/>
                <ErrorMessage name="fullName" component="div" />
                
              </div>
              <div>
                <h4>Số hộ chiếu/CMND</h4>
                <Field type="number" name="identify" value ={form.identify || ""}/>
                <ErrorMessage name="identify" component="div" />
              </div>
              <div>
                <h4>Năm sinh</h4>
                <Field type="number" name="birthdate" value={form.birthdate || ""}/>
                <ErrorMessage name="birthdate" component="div" />
              </div>
              <div>
                <h4 role="group">
                  Giới tính
                  <label>
                    <Field type="radio" name="gender"  value="male" />
                    Nam
                  </label>
                  <label>
                    <Field type="radio" name="gender"  value="female" />
                    Nữ
                  </label>
                </h4>
              </div>
              <div>
                <h4>Quốc tịch</h4>
                <Field type="text" name="nationality" value={form.nationality ||""} />
              </div>
              <div>
                <h4>Công ty làm việc</h4>
                <Field type="text" name="company" value={form.company||""}  />
              </div>
              <div>
                <h4>Bộ phận làm việc</h4>
                <Field type="text" name="department"value={form.department||""} />
              </div>
              <div>
                <h4>
                  Có thẻ bảo hiểm y tế{" "}
                  <Field type="checkbox" name="haveHealthInsurance" value={form.haveHealthInsurance}  />
                </h4>
              </div>
            </Form>
          </Formik>
        </div>
      );
}
