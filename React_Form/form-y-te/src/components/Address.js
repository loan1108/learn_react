import React from 'react'
import { ErrorMessage, Form, Formik, Field } from "formik";
export default function Address() {
  return (
    <div className="form">
        <h3>Địa chỉ liên lạc tại Việt Nam</h3>
        <Formik
        initialValues={{
            province:"",
            district:"",
            commune:"",
            village:"",
            phonenumber:"", 
            email:"",
        }}
        validate={values=>{
            const errors={}; 
            if(!values.province){
                errors.province ="Required";
            }
            if(!values.district){
                errors.district ="Required";
            }
            if(!values.commune){
                errors.commune ="Required";
            }
            if(!values.village){
                errors.village ="Required";
            }
            if(!values.phonenumber){
                errors.phonenumber ="Required";
            }
            if(!values.email){
                errors.email ="Required";
            }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/.test(values.email)){
                errors.email ="Invalid email address"
            }
            return errors;
        }}>
            <Form>
                <div>
                    <h4>Tỉnh thành</h4>
                    <Field type="text" name="province"/>
                    <ErrorMessage name="province" component="div" />
                </div>
                <div>
                    <h4>Quận/ huyện</h4>
                    <Field type="text" name="district"/>
                    <ErrorMessage name="district" component="div" />
                </div>
                <div>
                    <h4>Phường/ xã</h4>
                    <Field type="text" name="commune"/>
                    <ErrorMessage name="commune" component="div" />
                </div>
                <div>
                    <h4>Số nhà, phố, tổ dân phố/ đội/ thôn</h4>
                    <Field type="text" name="village"/>
                    <ErrorMessage name="village" component="div" />
                </div>
                <div>
                    <h4>Điện thoại</h4>
                    <Field type="number" name="phonenumber"/>
                    <ErrorMessage name="phonenumber" component="div" />
                </div>
                <div>
                    <h4>Email</h4>
                    <Field type="text" name ="email"/>
                    <ErrorMessage name="email" component="div" />
                </div>
            </Form>
        </Formik>
    </div>
  )
}
