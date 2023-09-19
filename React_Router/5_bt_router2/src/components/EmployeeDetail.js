import React from 'react'
import {useParams} from "react-router-dom"
 
export default function EmployeeDetail() {
    const params = useParams();
    console.log(params)
  return (
    <div className="mx-auto" style={{width:"300px"}}>
        <h4>The employee information</h4>
        <div>
            <p>Id:{params.id}</p>
            <p>Name:{params.name}</p>
            <p>Age:{params.age}</p>
        </div>
        
    </div>
  )
}
