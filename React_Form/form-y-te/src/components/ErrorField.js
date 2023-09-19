import React from "react";
import { Field, ErrorMessage } from "formik";

export default function ErrorField(props) {
  if (props.type === "radio") {
    return (
      <>
        <label style={{display:"inline-block", width:"200px"}}>{props.label}:</label>
        {props.values.map((item) => (
          <>
            <Field name={props.name} type="radio" value={item[0]} />
            <label>{item[1]}</label>
          </>
        ))}
        <ErrorMessage style={{color:"red"}}name={props.name} component="div" />
      </>
    );
  }
  return (
    <div>
      <label style={{display:"inline-block", width:"200px"}}htmlFor={props.name}>{props.label}</label>
      <Field type={props.type} name={props.name} />
      <ErrorMessage style={{color:"red"}} name={props.name} component="div" />
    </div>
  );
}
